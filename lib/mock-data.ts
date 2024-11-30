export interface Trade {
  trade_id: string;
  trade_type: string;
  broker_info: {
    name: string;
    platform: string;
  };
  trade_date: string;
  outcome: 'Win' | 'Loss';
  profit_loss: number;
  details: string;
}

export interface User {
  user_id: string;
  username: string;
  email: string;
  profile_pic?: string;
  chat_status: 'active' | 'pending' | 'blocked';
  role: 'user' | 'admin';
  joined_date: string;
  trade_stats: {
    total_trades: number;
    wins: number;
    losses: number;
    success_rate: number;
  };
}

export interface ChatMessage {
  message_id: string;
  user_id: string;
  username: string;
  timestamp: string;
  message_content: string;
  profile_pic?: string;
}

export const mockUserData: User = {
  user_id: "u1",
  username: "John Doe",
  email: "john@example.com",
  chat_status: "active",
  role: "user",
  joined_date: "2024-01-15",
  trade_stats: {
    total_trades: 156,
    wins: 122,
    losses: 34,
    success_rate: 78.2
  }
};

export const mockTrades: Trade[] = [
  {
    trade_id: "t1",
    trade_type: "Forex",
    broker_info: {
      name: "IC Markets",
      platform: "MT4"
    },
    trade_date: "2024-02-20T14:30:00Z",
    outcome: "Win",
    profit_loss: 500,
    details: "EUR/USD Long Position"
  },
  // Add more mock trades...
];

export const mockChatMessages: ChatMessage[] = [
  {
    message_id: "m1",
    user_id: "u1",
    username: "John Doe",
    timestamp: "2024-02-20T15:30:00Z",
    message_content: "Great trade setup on EUR/USD!",
  },
  // Add more mock messages...
];

export const mockAnalytics = {
  platform_stats: {
    total_users: 1250,
    active_users: 856,
    total_trades: 15678,
    success_rate: 76.5,
    total_profit: 1245789
  },
  monthly_stats: {
    users_growth: 12.5,
    trade_volume: 2567,
    success_rate: 78.9
  }
}; 