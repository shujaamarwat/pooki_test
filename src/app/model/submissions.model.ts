export interface SubmissionData {
  clientName: string;
  dateSubmitted: string;
  responseType: 'Positive' | 'Negative';
  processFlowRating: number;
}

export const sampleSubmissions: SubmissionData[] = [{
    clientName: 'Ralph Edwards',
    dateSubmitted: '1st March, 2023',
    responseType: 'Positive',
    processFlowRating: 4
  },
  {
    clientName: 'Esther Howard',
    dateSubmitted: '2nd March, 2023',
    responseType: 'Positive',
    processFlowRating: 3
  },
  {
    clientName: 'Brooklyn Simmons',
    dateSubmitted: '3rd March, 2023',
    responseType: 'Negative',
    processFlowRating: 1
  },
  {
    clientName: 'Marvin McKinney',
    dateSubmitted: '4th March, 2023',
    responseType: 'Negative',
    processFlowRating: 3
  },
];
