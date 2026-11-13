import { subject01Questions } from './subject-01.js';
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
