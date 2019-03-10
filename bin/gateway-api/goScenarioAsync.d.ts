import Difficulty from '../Difficulty';
import GameInfoModel from '../middle-contracts/GameInfoModel';
import Scenario from '../Scenario';
import Stage from '../Stage';
export default function goScenarioAsync(gameInfoModel: GameInfoModel, scenario: Scenario, difficulty: Difficulty, stage: Stage, unitIds: number[]): Promise<object>;
