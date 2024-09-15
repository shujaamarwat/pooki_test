export interface SubmissionData {
  clientName: string;
  dateSubmitted: string;
  responseType: 'Positive' | 'Negative';
  processFlowRating: number;
}