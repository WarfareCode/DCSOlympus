import { UnitDataTable } from "./atc/unitdatatable";
import { FeatureSwitches } from "./features/featureswitches";
import { Map } from "./map/map";
import { MissionHandler } from "./mission/missionhandler";
import { PanelsManager } from "./panels/panelsmanager";
import { UnitsManager } from "./unit/unitsmanager";

export interface IOlympusApp {
    featureSwitches: FeatureSwitches;
    missionHandler: MissionHandler;
    unitDataTable: UnitDataTable;
    unitsManager: UnitsManager;
}

export abstract class OlympusApp {

    #featureSwitches: FeatureSwitches;
    #map!: Map;
    #missionHandler: MissionHandler;
    #panelsManager: PanelsManager = new PanelsManager( this );
    #unitDataTable: UnitDataTable;
    #unitsManager: UnitsManager;

    constructor( config:IOlympusApp ) {

        this.#featureSwitches = config.featureSwitches;
        this.#missionHandler  = config.missionHandler;
        this.#unitDataTable   = config.unitDataTable;
        this.#unitsManager    = config.unitsManager;

    }

    getFeatureSwitches() {
        return this.#featureSwitches;
    }

    getMap() {
        return this.#map;
    }

    getPanelsManager() {
        return this.#panelsManager;
    }

    getUnitDataTable() {
        return this.#unitDataTable;
    }

    getUnitsManager() {
        return this.#unitsManager;
    }

    getWeaponsManager() {
        return this.getWeaponsManager;
    }

    setMap( map:Map ) {
        this.#map = map;
    }

    start() {

        //  Start the app

    }

}