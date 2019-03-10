import Attribute from '../Attribute';
import Monster from '../Monster';

export default interface UnitModel {
  unitId: number;
  class: number;
  level: number;
  type: Monster;
  awakened: boolean;
  attribute: Attribute;
}
