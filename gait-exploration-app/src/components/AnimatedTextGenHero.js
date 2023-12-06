// DynamicHeroSection.js
import React, { Component } from 'react';
import p5 from 'p5';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/AnimatedTextGenHero.css"


const AnimatedTextGenHero = () => {
    class AnimatedHomepageHeroGraphic extends Component {
        componentDidMount() {
            // Create a new p5 instance on component mount
            this.canvas = new p5(this.sketch, this.refs.canvas);
        }

        componentWillUnmount() {
            // Remove the p5 instance on component unmount
            this.canvas.remove();
        }

        sketch = (p) => {
            let objs = [];
            // let colors = ['#DFDFDF', '#E46424', '#E50009', '#14B7DA', '#0881E6', '#FF75A5', '#FCD232', '#800204', '#04E29A', '#333333'];
            let colors = [
                '#14B7DA',
                '#E43E22',
                '#FF1E1E',
                '#085AA0',
                '#4F51A6',
                '#FF99CC',
                '#FFC81E',
                '#800E1E',
                '#00BF73',
                '#000000'
            ];

            p.setup = () => {
                p.createCanvas(window.innerWidth, window.innerHeight);
                p.rectMode(p.CENTER);
                p.strokeWeight(2);
                let c = 15;
                let w = p.width / c;
                let h = p.height/ c;
                for (let i = 0; i < c; i++) {
                    for (let j = 0; j < c; j++) {
                        let x = i * w + w / 2;
                        let y = j * w + w / 2;
                        objs.push(new OBJ(x, y, w));
                    }
                }
            };

            p.draw = () => {
                for (let i of objs) {
                    i.show();
                    i.move();
                }
            };

            class OBJ {
                constructor(x, y, w) {
                    this.x = x;
                    this.y = y;
                    this.w = w;
                    this.col1 = this.col2 = this.col3;
                    while (this.col1 === this.col2 || this.col2 === this.col3 || this.col1 === this.col3) {
                        this.col1 = p.random(colors);
                        this.col2 = p.random(colors);
                        this.col3 = p.random(colors);
                    }
                    this.ang = p.int(p.random(4)) * (p.TAU / 4);

                    this.t = -p.int(p.random(7)) * 100;
                    this.t1 = 50;
                    this.t2 = this.t1 + 50;
                    this.ss1 = ((this.w * 2) / 3) * 2;
                    this.ss2 = ((this.w * 2) / 3);
                    this.d1 = this.ss1;
                    this.d2 = this.ss2;
                }

                show() {
                    p.push();
                    p.translate(this.x, this.y);
                    p.noStroke();
                    p.fill(this.col1);
                    p.square(0, 0, this.w);
                    p.drawingContext.clip();
                    p.rotate(this.ang);
                    p.stroke(0);
                    p.fill(this.col2);
                    p.circle(this.w / 2, this.w / 2, this.d1);
                    p.fill(this.col3);
                    p.circle(this.w / 2, this.w / 2, this.d2);
                    p.noFill();
                    p.square(0, 0, this.w);
                    p.pop();
                }

                move() {
                    this.t++;
                    if (0 < this.t && this.t < this.t1) {
                        let n = p.norm(this.t, 0, this.t1 - 1);
                        this.d1 = p.lerp(this.ss1, this.ss1 + this.w * 2.5, easeInOutQuad(n));
                        this.d2 = p.lerp(this.ss2, this.ss2 + this.w * 2.5, easeInOutQuad(n));
                    }
                    if (this.t === this.t1 + 1) {
                        this.col1 = this.col3;
                        while (this.col1 === this.col2 || this.col2 === this.col3 || this.col1 === this.col3) {
                            this.col2 = p.random(colors);
                            this.col3 = p.random(colors);
                        }
                        this.ang = p.int(p.random(4)) * (p.TAU / 4);
                    }
                    if (this.t1 < this.t && this.t < this.t2) {
                        let n = p.norm(this.t, this.t1, this.t2 - 1);
                        this.d1 = p.constrain(p.lerp(this.ss1 - this.w * 2, this.ss1, easeInOutQuad(n)), 0, this.ss1);
                        this.d2 = p.constrain(p.lerp(this.ss2 - this.w * 2, this.ss2, easeInOutQuad(n)), 0, this.ss2);
                    }
                    if (this.t2 <= this.t) {
                        this.t = -p.int(p.random(7) + 1) * 100;
                    }
                }
            };

            function easeInOutQuad(x) {
                return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
            }
        };

        render() {
            return <div ref="canvas"></div>;
        }
    }

    return(
        <div>
            <Container className='home-opaque-container' fluid>
                <div id = 'home-animated-squares' className='home-animated-squares'>
                    <AnimatedHomepageHeroGraphic />
                </div>
                <Row>
                    <Col xs ={12} className='home-hero-top'>
                    </Col>
                    <Col xs ={12} className='home-anim-hero-content'>
                        <h1>Intellectuals</h1>
                        <h2>Sculpting Code, Forging Innovation</h2>
                    </Col>
                    <Col xs ={8} className='home-hero-bottom'>
                    </Col>
                    <Col xs ={4} className='projects-hero-bottom'>
                        <h2 id = "project-arrow-down-text" className="text-above-arrow">Scroll Down</h2>
                        <div id = "project-arrow-down" className={'arrow'}>
                            <i className="bi bi-arrow-bar-down arrow"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export {AnimatedTextGenHero};
