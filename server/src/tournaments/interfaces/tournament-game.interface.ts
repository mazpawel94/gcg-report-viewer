export interface TournamentGamePlayer {
  id: number;
  name: string;
}

export interface TournamentGame {
  id: number;
  round: number;
  table: number;
  player1: TournamentGamePlayer;
  player2: TournamentGamePlayer;
  score1: number;
  score2: number;
  gcgUrl: string;
}
