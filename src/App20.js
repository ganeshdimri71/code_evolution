import React from "react";
// import d from '../src/assets/22.obj'

import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import {
    ArcRotateCamera,
    Color3,
    Vector3,
    HemisphericLight,
    MeshBuilder,
    Mesh,
    UtilityLayerRenderer,
    PositionGizmo,
    RotationGizmo,
    HighlightLayer,

} from "@babylonjs/core";
import { GridMaterial } from "@babylonjs/materials";
// import SceneComponent from "./SceneComponent";
// import "./ViewPortComponent.css";

let translategizmo = null;
let rotategizmo = null;
let utilLayer = null;
let highlight = null;

const ViewPortComponent = (props) => {
    const { settingData, setSettings, addData, setAdd, fileControl, setFileControl } = props;
    const sceneRef = React.useRef(null);

    React.useEffect(() => {
        const scene = sceneRef.current;

        if (scene) {
            if (fileControl.fileadd) {
       // Question:
       // I am testing the loader, by storing a obj file under src/assets/example folder, so is this the correct way to import it? how can I load a local obj anywhere in my disk? like the way we put it in sandbox.babylon.com?

       // the obj is not loaded with errors:


                BABYLON.SceneLoader.Append("../src/assets/", "22.obj", scene, function (scene) {
                    // do something with the scene
                });
                setFileControl({ ...fileControl, fileadd: false }); // change state and re-render
            }

        }
    }, [settingData, addData, fileControl]);

    const onSceneReady = (scene) => {
        sceneRef.current = scene;
        let camera = new ArcRotateCamera(
            "mainCamera",
            0,
            0,
            10,
            new Vector3(0, 0, 0),
            scene
        );
        camera.setPosition(new Vector3(0, 500, -600));
        const canvas = scene.getEngine().getRenderingCanvas();
        camera.attachControl(canvas, true);
        let light = new HemisphericLight("light", new Vector3(0, 500, 0), scene);
        light.intensity = 0.7;
        // initial ground
        let ground = MeshBuilder.CreateGround(
            "plane",
            { width: settingData.planesize, height: settingData.planesize },
            scene
        );
        let groundMaterial = new GridMaterial("groundMaterial", scene);
        //... 
    };
    /**
     * Will run on every frame render.  We are spinning the box on y-axis.
     */
    const onRender = (scene) => {

    };

    return (
        <SceneComponent
            antialias
            onSceneReady={onSceneReady}
            onRender={onRender}
            id="viewport"
        ></SceneComponent>
    );
};

export default ViewPortComponent;