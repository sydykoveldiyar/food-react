import React, {useState, useRef} from 'react'
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import './admin-header.css'

const AdminHeader = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

    return (
        <div className="admin__top-menu">
            <button className="admin__top-menu__btn">
                <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px" viewBox="0 0 512 512">
                    <g>
                        <g>
                            <path d="M467.812,431.851l-36.629-61.056c-16.917-28.181-25.856-60.459-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04
    V42.667C298.66,19.136,279.524,0,255.993,0s-42.667,19.136-42.667,42.667V80.96C151.716,99.371,106.66,156.48,106.66,224v53.483
    c0,32.853-8.939,65.109-25.835,93.291l-36.629,61.056c-1.984,3.307-2.027,7.403-0.128,10.752c1.899,3.349,5.419,5.419,9.259,5.419
    H458.66c3.84,0,7.381-2.069,9.28-5.397C469.839,439.275,469.775,435.136,467.812,431.851z" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path
                                d="M188.815,469.333C200.847,494.464,226.319,512,255.993,512s55.147-17.536,67.179-42.667H188.815z" />
                        </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>
            </button>

            <button className="admin__top-menu__btn" onClick={() => {
                setIsActive(!isActive)
            }}
            >
                <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px" viewBox="0 0 512 512">
                    <g>
                        <g>
                            <path d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148
    C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962
    c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216
    h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40
    c59.551,0,108,48.448,108,108S315.551,256,256,256z" />
                        </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>
                <div ref={dropdownRef} className={`btn-dwn__dropdown ${isActive ? "active" : "inactive"}`}>
                    <a href='/'>Выйти</a>
                </div>
            </button>
        </div>
    );
}
export default AdminHeader