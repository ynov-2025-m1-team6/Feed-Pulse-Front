export interface IFormState {
  message: string;
  errors: Record<string, string>;
  success: boolean;
}

export interface BarChartData {
  label: string;
  value: number;
}

export interface IUser {
  CreatedAt: string;
  UpdatedAt: string;
  email: string;
  id: number;
  password: string;
  username: string;
  uuid: string;
}

export interface IMetrics {
  distributionByChannel: {
    [channel: string]: number;
  };
  distributionByTopic: {
    [topic: string]: number;
  };
  volumetryByDay: {
    "2025-05-05": number;
  };
  averageSentiment: number;
  Sentiment: {
    positive: number;
    neutral: number;
    negative: number;
  };
  percentageSentimentUnderTreshold: number;
}

export interface DoughnutChartData {
  label: string;
  value: number;
}

export interface PieChartData {
  label: string;
  value: number;
}
