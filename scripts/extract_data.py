import json
import re
import os

os.makedirs('src/data/questions', exist_ok=True)
os.makedirs('docs', exist_ok=True)

# 1. Parse SWD301
with open(r'C:/Users/NgKaitou/.gemini/antigravity/brain/2ade0386-032b-4e33-b77e-61aaebbe6c51/.system_generated/steps/32/output.txt', 'r', encoding='utf-8') as f:
    d1 = json.load(f)

swd_questions = []
current_chapter = 'Chapter 1: Introduction'
current_q = None
q_idx = 0

for it in d1['detail']['items']:
    text = it.get('text', '').strip()
    if not text:
        continue
    if it.get('type') == 'heading' or (text.lower().startswith('chapter ') and len(text) < 80):
        current_chapter = text
        continue
    
    m = re.match(r'^(\d+)\.\s*(.*)', text)
    if m:
        if current_q:
            swd_questions.append(current_q)
        q_idx += 1
        current_q = {
            'id': f'swd301-q{q_idx:03d}',
            'subjectId': 'swd301',
            'topic': current_chapter,
            'type': 'single',
            'question': m.group(2).strip(),
            'options': [],
            'correctAnswer': None,
            'explanation': f'Official textbook exercise answer for {current_chapter}.'
        }
    elif current_q and re.match(r'^\([a-z]\)', text):
        opt_match = re.match(r'^\(([a-z])\)\s*(.*)', text)
        opt_id = opt_match.group(1).upper()
        opt_text = opt_match.group(2)
        is_correct = False
        if '[Đáp án đúng]' in opt_text or '[ĐÁP ÁN ĐÚNG]' in opt_text:
            is_correct = True
            opt_text = opt_text.replace('[Đáp án đúng]', '').replace('[ĐÁP ÁN ĐÚNG]', '').strip()
        current_q['options'].append({'id': opt_id, 'text': opt_text})
        if is_correct:
            current_q['correctAnswer'] = opt_id
    elif current_q and len(current_q['options']) == 0:
        current_q['question'] += ' ' + text

if current_q:
    swd_questions.append(current_q)

# 2. Parse SBA301
with open(r'C:/Users/NgKaitou/.gemini/antigravity/brain/2ade0386-032b-4e33-b77e-61aaebbe6c51/.system_generated/steps/36/output.txt', 'r', encoding='utf-8') as f:
    d2 = json.load(f)

sba_questions = []
current_part = 'Introduction'
q_idx_sba = 0

for it in d2['detail']['items']:
    if it.get('type') == 'heading':
        current_part = it.get('text', '').strip()
        continue
    if it.get('type') != 'table':
        continue
    text = it.get('text', '').strip()
    if text.startswith('Document Overview'):
        continue
    
    q_match = re.match(r'^Q(\d+)\s*-\s*\[?(.*?)\]?\s*\n(.*?)(?=[A-Z]\.\s+)', text, re.DOTALL)
    if not q_match:
        continue
    q_num = q_match.group(1)
    q_type_str = q_match.group(2).strip('[] ')
    q_body = q_match.group(3).strip()
    
    ans_match = re.search(r'Correct Answer:\s*([A-Z,\s]+)(?:\n|$)', text)
    correct_ans_str = ans_match.group(1).strip() if ans_match else ''
    answers = [a.strip() for a in correct_ans_str.split(',') if a.strip()]
    if len(answers) == 1:
        correct_answer = answers[0]
        q_type = 'single'
    else:
        correct_answer = answers
        q_type = 'multiple'
        
    exp_match = re.search(r'Explanation:\s*(.*?)(?:Source:|$)', text, re.DOTALL)
    explanation = exp_match.group(1).strip() if exp_match else ''
    
    src_match = re.search(r'Source:\s*(.*)', text, re.DOTALL)
    source = src_match.group(1).strip() if src_match else ''
    if source and explanation:
        explanation += f' (Source: {source})'
    elif source:
        explanation = f'Source: {source}'
        
    opts_text_match = re.search(r'([A-Z]\.\s+.*?)Correct Answer:', text, re.DOTALL)
    opts_raw = opts_text_match.group(1)
    
    opt_items = re.findall(r'([A-Z])\.\s+(.*?)(?=(?:[A-Z]\.\s+)|$)', opts_raw, re.DOTALL)
    options = [{'id': o[0], 'text': o[1].strip()} for o in opt_items]
    
    q_idx_sba += 1
    sba_questions.append({
        'id': f'sba301-q{q_idx_sba:03d}',
        'subjectId': 'sba301',
        'topic': current_part,
        'type': q_type,
        'question': q_body,
        'options': options,
        'correctAnswer': correct_answer,
        'explanation': explanation
    })

# Write subject-01.js
with open('src/data/questions/subject-01.js', 'w', encoding='utf-8') as f:
    f.write('// SWD301: Software Modeling and Design (Hassan Gomaa)\n')
    f.write('// Extracted from docs/202_cau_hoi_trac_nghiem_swd301.docx\n')
    f.write('export const subject01Questions = ')
    json.dump(swd_questions, f, ensure_ascii=False, indent=2)
    f.write(';\n\nexport default subject01Questions;\n')

# Write subject-02.js
with open('src/data/questions/subject-02.js', 'w', encoding='utf-8') as f:
    f.write('// SBA301: Frontend Web Development & ReactJS Exam Preparation\n')
    f.write('// Extracted from docs/sba301-complete-exam-questions-part1-to-part22.docx\n')
    f.write('export const subject02Questions = ')
    json.dump(sba_questions, f, ensure_ascii=False, indent=2)
    f.write(';\n\nexport default subject02Questions;\n')

# Write subjects.js
subjects_data = [
    {
        'id': 'swd301',
        'code': 'SWD301',
        'name': 'Software Architecture & Design',
        'description': 'Software Modeling and Design: UML, Use Cases, Patterns, and Software Architectures (Hassan Gomaa). Covers 20 chapters of architectural principles.',
        'category': 'Software Engineering',
        'icon': 'Boxes',
        'badge': 'Architecture',
        'color': 'indigo',
        'totalQuestions': len(swd_questions),
        'file': 'subject-01.js'
    },
    {
        'id': 'sba301',
        'code': 'SBA301',
        'name': 'Modern React & Web Development',
        'description': 'Comprehensive exam practice covering ReactJS core principles, Components, Hooks, State & Context, React-Bootstrap, Routing, Testing, and modern web tools across 22 chapters.',
        'category': 'Frontend Engineering',
        'icon': 'Code2',
        'badge': 'ReactJS',
        'color': 'cyan',
        'totalQuestions': len(sba_questions),
        'file': 'subject-02.js'
    }
]

with open('src/data/subjects.js', 'w', encoding='utf-8') as f:
    f.write('// Subject definitions for Recallify Exam Preparation Platform\n')
    f.write('export const subjects = ')
    json.dump(subjects_data, f, ensure_ascii=False, indent=2)
    f.write(';\n\nexport default subjects;\n')

# Write index.js for questions
with open('src/data/questions/index.js', 'w', encoding='utf-8') as f:
    f.write("""import { subject01Questions } from './subject-01.js';
import { subject02Questions } from './subject-02.js';

export { subject01Questions, subject02Questions };

export const questionBanks = {
  swd301: subject01Questions,
  sba301: subject02Questions,
  'subject-01': subject01Questions,
  'subject-02': subject02Questions
};

export const getQuestionsBySubjectId = (subjectId) => {
  return questionBanks[subjectId] || [];
};
""")

print(f"Extraction successful: SWD301={len(swd_questions)} questions, SBA301={len(sba_questions)} questions")

