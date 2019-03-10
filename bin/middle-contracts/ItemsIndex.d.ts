import ItemModel from './ItemModel';
export default interface ItemsIndex {
    [inventoryMasterId: number]: ItemModel;
}
