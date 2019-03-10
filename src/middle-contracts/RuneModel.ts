import RuneClass from '../RuneClass';
import RuneQuality from '../RuneQuality';
import RuneSet from '../RuneSet';
import Slot from '../Slot';

export default interface RuneModel {
  runeId: number;
  slot: Slot;
  rank: RuneQuality;
  class: RuneClass;
  set: RuneSet;
  upgradeLimit: number;
  currentUpgrade: number;
}
