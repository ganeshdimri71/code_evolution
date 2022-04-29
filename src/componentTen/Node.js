import userEvent from '@testing-library/user-event'
import React, { useRef, useState, useEffect } from 'react'
import { Circle, Layer, Group, Rect, Stage, Text } from 'react-konva'
const konva = require('konva')

const Node = () => {
    const [rectPosition, setRectPosition] = useState([])
    const [mousePosition, setMousePosition] = useState([])
    const [circleRender, setCircleRender] = useState([1, 2])
    const [circleCordinates, setCircleCordinates] = useState([])
    let circleRef = useRef(null)
    let rectRef = useRef(null)
    const refs = useRef([]);
    const handleStageMouseDown = (e) => {
        let { x, y } = e.target.getStage().getPointerPosition();
        // if (activeTool === 'S') setRectPosition([x, y])
        setRectPosition([x, y])
    }
    var circle = { x: 100, y: 290, r: 10 };
    var rect = { x: 100, y: 100, w: 40, h: 100 };

    // return true if the rectangle and circle are colliding
    // function RectCircleColliding(circle, rect) {
    //     // console.log('circle, rect', circle, rect)
    //     var distX = Math.abs(circle.x - rect.x - rect.w / 2);
    //     var distY = Math.abs(circle.y - rect.y - rect.h / 2);

    //     if (distX > (rect.w / 2 + circle.r)) { return false; }
    //     if (distY > (rect.h / 2 + circle.r)) { return false; }

    //     if (distX <= (rect.w / 2)) { return true; }
    //     if (distY <= (rect.h / 2)) { return true; }

    //     var dx = distX - rect.w / 2;
    //     var dy = distY - rect.h / 2;
    //     return (dx * dx + dy * dy <= (circle.r * circle.r));
    // }
    // function collisionCheckCircleRect(circle, rect) {
    //     console.log('circle, rect', circle, rect)
    //     var distx = Math.abs(circle.x - rect.x);
    //     var disty = Math.abs(circle.y - rect.y);

    //     if (distx > (rect.w / 2 + circle.r)) { return false; }
    //     if (disty > (rect.h / 2 + circle.r)) { return false; }

    //     if (distx <= (rect.w / 2)) { return true; }
    //     if (disty <= (rect.h / 2)) { return true; }

    //     var hypot = (distx - rect.w / 2) * (distx - rect.w / 2) +
    //         (disty - rect.h / 2) * (disty - rect.h / 2);

    //     //console.log(hypot <= (circle.radius*circle.radius))
    //     return (hypot <= (circle.r * circle.r));
    // }

    function collides(rect, circle, collide_inside) {
        // compute a center-to-center vector
        var half = { x: rect.w / 2, y: rect.h / 2 };
        var center = {
            x: circle.x - (rect.x + half.x),
            y: circle.y - (rect.y + half.y)
        };

        // check circle position inside the rectangle quadrant
        var side = {
            x: Math.abs(center.x) - half.x,
            y: Math.abs(center.y) - half.y
        };
        if (side.x > circle.r || side.y > circle.r) // outside
            return false;
        if (side.x < -circle.r && side.y < -circle.r) // inside
            return collide_inside;
        if (side.x < 0 || side.y < 0) // intersects side or corner
            return true;

        // circle is near the corner
        return side.x * side.x + side.y * side.y < circle.r * circle.r;
    }

    const handleStageMouseMove = (e) => {
        let { x, y } = e.target.getStage().getPointerPosition();
        setMousePosition([x, y])
        circleCordinates.map((individualCircle, index) => {
            // circleCordinates[index].circleRef.current
            // circleRef.current.x()
            // console.log('circleRef.current.x() circleRef.current.y() circleRef.current.r()', circleRef.current.x(), circleRef.current.y(), circleRef.current.radius())
            const circlePoints = {
                x: individualCircle.x,
                y: individualCircle.y,
                r: individualCircle.r,
            }
            // x = { rectPosition[0]}
            // y = { rectPosition[1]}
            // width = { mousePosition[0] - rectPosition[0] }
            // height = { mousePosition[1] - rectPosition[1] }
            const rectanglePoints = {
                x: rectPosition[0],
                y: rectPosition[1],
                w: mousePosition[0] - rectPosition[0],
                h: mousePosition[1] - rectPosition[1]
            }
            // console.log('!(rectanglePoints === undefined) && !(rectanglePoints === undefined) && !Number.isNaN(rectanglePoints) && !Number.isNaN(rectanglePoints)', !(rectanglePoints.x === undefined), !(rectanglePoints.y === undefined), !Number.isNaN(rectanglePoints.w), !Number.isNaN(rectanglePoints.h))
            // console.log('!(rectanglePoints.x )  !(rectanglePoints.y )  !Number.isNaN(rectanglePoints.w)  !Number.isNaN(rectanglePoints.h)', (rectanglePoints.x), (rectanglePoints.y), (rectanglePoints.w), (rectanglePoints.h))
            if (!(rectanglePoints.x === undefined), !(rectanglePoints.y === undefined) && !Number.isNaN(rectanglePoints.w), !Number.isNaN(rectanglePoints.h)) {
                // const overlapping = collides(individualCircle, rectanglePoints)
                const overlapping = konva.Util.haveIntersection(refs.current[index].getClientRect(), rectRef.current.getClientRect());
                // console.log('Overlapping', overlapping)
                if (overlapping) {
                    refs.current[index].fill('goldenrod')
                } else {
                    refs.current[index].fill('black')
                }
                // console.log(' ,circleCordinates[index].fill', circleCordinates[index].fill)
                // console.log(' ,circleCordinates', circleCordinates)
                // console.log()
            }
        })
        // console.log('circleRef.current.getClientRect(), rectRef.current.getClientRect()', circleRef.current.getClientRect(), rectRef.current.getClientRect())
        // const circlePoints = {
        //     x: circleRef.current.x(),
        //     y: circleRef.current.y(),
        //     r: circleRef.current.radius()
        // }
        // const rectanglePoints = {
        //     x: rectRef.current.x(),
        //     y: rectRef.current.y(),
        //     w: Math.abs(rectRef.current.width()),
        //     h: Math.abs(rectRef.current.height())
        // }
        // console.log('circlePoints rectanglePoints', circlePoints, rectanglePoints)
        // if (!Number.isNaN(rectRef.current.getClientRect().x) && !Number.isNaN(rectRef.current.getClientRect().y) && !Number.isNaN(rectRef.current.getClientRect().width) && !Number.isNaN(rectRef.current.getClientRect().height)) {
        //     const overlapping = konva.Util.haveIntersection(circleRef.current.getClientRect(), rectRef.current.getClientRect());
        //     if (overlapping) {
        //         circleRef.current.fill('black')
        //     } else {
        //         circleRef.current.fill('red')
        //     }
        // console.log('!Number.isNaN(rectRef.current.x) && !Number.isNaN(rectRef.current.y) && !Number.isNaN(rectRef.current.width) && !Number.isNaN(rectRef.current.height)', !(rectRef.current.x() === 0), !(rectRef.current.y() === 0), !Number.isNaN(rectRef.current.width()), !Number.isNaN(rectRef.current.height()))
        // if (!(rectRef.current.x() === 0) && !(rectRef.current.y() === 0) && !Number.isNaN(rectRef.current.width()) && !Number.isNaN(rectRef.current.height())) {
        //     const overlapping = RectCircleColliding(circlePoints, rectanglePoints)
        //     // console.log('Overlapping', overlapping)
        //     if (overlapping) {
        //         circleRef.current.fill('black')
        //     } else {
        //         circleRef.current.fill('red')
        //     }
        // }
        // console.log('Overlapping', overlapping)
    }


    // dispatch(stageMouseMove({ x, y, rectPosition }))


    const handleStageMouseUp = (e) => {
        // let {x,y} = e.target.getStage().getPointerPosition();
        // if (activeTool === 'S' && rectPosition.length) setRectPosition([])
        setRectPosition([])

    }

    const generateCircles = () => {
        let circleArray = []
        for (let i = 0; i < 1000; i++) {
            circleArray.push({ x: (Math.random() * 500) + 100, y: (Math.random() * 500) + 100, r: 20, fill: 'black' })
            // console.log('circleArray', circleArray)
        }
        setCircleCordinates(circleArray)

    }

    // const onMouseEnterHandler = () => {
    //     const overlapping = konva.Util.haveIntersection(circleRef.current.getClientRect(), rectRef.current.getClientRect());
    //     console.log('circleRef.current.getClientRect(), rectRef.current.getClientRect()', circleRef.current.getClientRect(), rectRef.current.getClientRect())
    //     console.log('overlapping', overlapping)
    // }

    useEffect(() => {
        generateCircles()

    }, [])
    return (
        <>
            {/* <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div> */}
            <Stage width={window.innerWidth} height={window.innerHeight}
                onMouseDown={(e) => handleStageMouseDown(e)}
                onMouseMove={(e) => handleStageMouseMove(e)}
                onMouseUp={(e) => handleStageMouseUp(e)}
            >
                <Layer>
                    <Group
                        draggable
                    >
                        {
                            circleCordinates.map((circle, index) => {
                                // console.log('circle', circle)
                                return (
                                    <>
                                        <Circle
                                            key={Math.random() * 500}
                                            x={circle.x}
                                            y={circle.y}
                                            radius={circle.r}
                                            fill={circle.fill}
                                            ref={(element) => {
                                                refs.current[index] = element;
                                                
                                            }}
                                            listening={false}
                                        // onMouseEnter={onMouseEnterHandler}
                                        />
                                        <Text
                                            key={Math.random() * 1000}
                                            x={circle.x}
                                            y={circle.y}
                                            text={index + 1}
                                            fill='white'

                                        />
                                    </>

                                )
                            })
                        }
                        {/* {
                            circleRender.map((circle, index) => {
                                // const overlapping = konva.Util.haveIntersection(circleRef.current.getClientRect(), rectRef.current.getClientRect());
                                // console.log('circleRef.current.getClientRect()', circleRef.current.x, circleRef.current.y)
                                return (
                                    <Circle
                                        key={Math.random() * 500}
                                        x={500 + (index + 1) * 20}
                                        y={500 + (index + 1) * 20}
                                        radius={5}
                                        fill='red'
                                        ref={circleRef}
                                        draggable
                                    />
                                )
                            })
                        } */}
                        {/* <Circle
                            x={500}
                            y={500}
                            radius={5}
                            fill='red'
                            ref={circleRef}
                            draggable
                        /> */}
                        {/* <Circle
                            x={550}
                            y={550}
                            radius={5}
                            fill='red'
                            ref={circleRef}
                            // ref={rectRef}
                            draggable
                        /> */}
                    </Group>
                    <Rect
                        x={rectPosition[0]}
                        y={rectPosition[1]}
                        width={mousePosition[0] - rectPosition[0]}
                        height={mousePosition[1] - rectPosition[1]}
                        strokeWidth={1}
                        stroke="#72a8e3"
                        fill="#cce5ff5e"
                        ref={rectRef}
                        strokeScaleEnabled={false}
                    />
                </Layer>
            </Stage>
        </>
    )
}

export default Node