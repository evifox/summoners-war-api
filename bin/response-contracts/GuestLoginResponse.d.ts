import Difficulty from '../Difficulty';
import NumBool from '../NumBool';
import RuneClass from '../RuneClass';
import RuneQuality from '../RuneQuality';
import RuneSet from '../RuneSet';
import Scenario from '../Scenario';
import GatewayResponseBase from './GatewayResponseBase';
import WizardInfoModel from './WizardInfoModel';
import Slot from '../Slot';
interface ScenarioListItemModel {
    region_id: Scenario;
    difficulty: Difficulty;
    cleared: NumBool;
    stage_list: StageListItemModel[];
}
interface StageListItemModel {
    stage_no: number;
    cleared: NumBool;
}
interface DefenseUnitListItemModel {
    pos_id: number;
    unit_id: number;
}
interface BuildingListItemModel {
    building_id: number;
    island_id: number;
    building_master_id: number;
    pos_x: number;
    pos_y: number;
    gain_per_hour: number;
    harvest_max?: number;
    harvest_available?: number;
}
interface ObstacleListItemModel {
    obstacle_id: number;
    master_id: number;
    island_id: number;
    pos_x: number;
    pos_y: number;
}
interface UnitListItemModel {
    unit_id: number;
    island_id: number;
    building_id: number;
    unit_master_id: number;
    unit_level: number;
    class: number;
    con: number;
    atk: number;
    def: number;
    spd: number;
    resist: number;
    accuracy: number;
    critical_rate: number;
    critical_damage: number;
    experience: number;
    exp_gained: number;
    exp_gain_rate: number;
    runes: RunesItemModel[];
    create_time: string;
}
interface SummonSpecialInfoModel {
    this: number[];
    next: number[];
    next_remained: number;
    third: number[];
    third_remained: number;
    fourth: number[];
    fourth_remained: number;
}
interface InventoryInfoItemModel {
    item_master_type: number;
    item_master_id: number;
    item_quantity: number;
}
interface WishListModel {
    trial_remained: number;
    login_sequence: number;
    wish_sequence: number;
    next_update: number;
    item_list: WishListItemModel[];
    item_list_version: number;
}
interface WishListItemModel {
    item_master_type: number;
    item_master_id: number;
    amount: number;
}
interface RunesItemModel {
    rune_id: number;
    slot_no: Slot;
    rank: RuneQuality;
    class: RuneClass;
    set_id: RuneSet;
    upgrade_limit: number;
    upgrade_curr: number;
    sell_value: number;
}
export interface NpcFriendIndexItem {
    wizard_id: number;
    npc_friend_id: number;
    npc_friend_level: number;
    unit_master_id: number;
    unit_class: number;
    unit_level: number;
    last_assist: string;
    unit_id: number;
    next_assist_time: number;
}
interface NpcFriendIndex {
    [npc_friend_id: number]: NpcFriendIndexItem;
}
export default interface GuestLoginResponse extends GatewayResponseBase {
    wizard_info?: WizardInfoModel;
    scenario_list?: ScenarioListItemModel[];
    defense_unit_list?: DefenseUnitListItemModel[];
    building_list?: BuildingListItemModel[];
    obstacle_list?: ObstacleListItemModel[];
    unit_list?: UnitListItemModel[];
    summon_special_info?: SummonSpecialInfoModel;
    inventory_info?: InventoryInfoItemModel[];
    wish_list?: WishListModel;
    runes?: RunesItemModel[];
    npc_friend_list?: NpcFriendIndex;
}
export {};
