import React from 'react';
import './dish-list.css';
import WaiterHeader from '../waiter-header/waiter-header'

const DishOrder = () => {
    return (
        <div>
            <WaiterHeader />
            <section className="dish-list">
                <div className="dish-list-item">
                    <h3 className="dish-list-item__title">Боул с черникой и гранолой</h3>
                    <div className="dish-list-item__bottom-side">
                        <div className="dish-list-item__left-side">
                            <div className="dish-list-item__price justify-align"><p>250,00</p></div>
                            <button className="dish-list-item__plus-minus justify-align"><span>-</span></button>
                            <div className="dish-list-item__count justify-align"><p>1</p></div>
                            <button className="dish-list-item__plus-minus justify-align">+</button>
                        </div>
                        <div className="dish-list__btn-wrapper">
                            <button className="dish-list__done-btn">
                                <svg width="21" height="15" viewBox="0 0 21 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="21" height="15" fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                            height="1">
                                            <use href="#image0"
                                                transform="translate(0 -0.2) scale(0.015625 0.021875)" />
                                        </pattern>
                                        <image id="image0" width="64" height="64"
                                            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAXVBMVEUAAAAhggsfgw0chAkfgw0egw0fgw0fgw0fgwwA/wAfgw0fgw0cgw4jhAkfgw0dgg4fgw0fgw0bgAkfgw0fggoghQshhBAfhA0dgw8fgw0egg4fgw0cgA4fgw0AAADpN3GfAAAAHXRSTlMAL8Yb69q/5ykB7OQlHcw13O8c7TEwH98j417HJBoagcsAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4wwHCyYnbqLPmgAAAMlJREFUWMPtlNkSgzAIRdPNrla7r/z/b9bJRMe0KAn3sfCK5yQTLzhnZQXVZDrD+DktEEPDE2LwPGAIPFEB8suV8cYbb3xUa4nfBH67Y/vlvoLOL2s6VBhPYwaJP9a+O2gQ378I/dOZbV+E93PuegtfsHdI+f9jhrT8DBtS8zdkSM8vb8jJP2fIm59fQ+78fRvy5zc2aOa/b9Dtj/ujTfVTzK9wB9KczxgU+y8yqPZnz6Dcv51ByXcGNR8MAO8NEN8k6vWGeKs/rA9IvThYdIJcnQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMi0wN1QxMTozODozOSswMDowMOmDhPsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTItMDdUMTE6Mzg6MzkrMDA6MDCY3jxHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==" />
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="dish-list-item">
                    <h3 className="dish-list-item__title">Боул с черникой и гранолой</h3>
                    <div className="dish-list-item__bottom-side">
                        <div className="dish-list-item__left-side">
                            <div className="dish-list-item__price justify-align"><p>250,00</p></div>
                            <button className="dish-list-item__plus-minus justify-align"><span>-</span></button>
                            <div className="dish-list-item__count justify-align"><p>1</p></div>
                            <button className="dish-list-item__plus-minus justify-align">+</button>
                        </div>
                        <div className="dish-list__btn-wrapper">
                            <button className="dish-list__done-btn">
                                <svg width="21" height="15" viewBox="0 0 21 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="21" height="15" fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                            height="1">
                                            <use href="#image0"
                                                transform="translate(0 -0.2) scale(0.015625 0.021875)" />
                                        </pattern>
                                        <image id="image0" width="64" height="64"
                                            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAXVBMVEUAAAAhggsfgw0chAkfgw0egw0fgw0fgw0fgwwA/wAfgw0fgw0cgw4jhAkfgw0dgg4fgw0fgw0bgAkfgw0fggoghQshhBAfhA0dgw8fgw0egg4fgw0cgA4fgw0AAADpN3GfAAAAHXRSTlMAL8Yb69q/5ykB7OQlHcw13O8c7TEwH98j417HJBoagcsAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4wwHCyYnbqLPmgAAAMlJREFUWMPtlNkSgzAIRdPNrla7r/z/b9bJRMe0KAn3sfCK5yQTLzhnZQXVZDrD+DktEEPDE2LwPGAIPFEB8suV8cYbb3xUa4nfBH67Y/vlvoLOL2s6VBhPYwaJP9a+O2gQ378I/dOZbV+E93PuegtfsHdI+f9jhrT8DBtS8zdkSM8vb8jJP2fIm59fQ+78fRvy5zc2aOa/b9Dtj/ujTfVTzK9wB9KczxgU+y8yqPZnz6Dcv51ByXcGNR8MAO8NEN8k6vWGeKs/rA9IvThYdIJcnQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMi0wN1QxMTozODozOSswMDowMOmDhPsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTItMDdUMTE6Mzg6MzkrMDA6MDCY3jxHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==" />
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="dish-list-item">
                    <h3 className="dish-list-item__title">Боул с черникой и гранолой</h3>
                    <div className="dish-list-item__bottom-side">
                        <div className="dish-list-item__left-side">
                            <div className="dish-list-item__price justify-align"><p>250,00</p></div>
                            <button className="dish-list-item__plus-minus justify-align"><span>-</span></button>
                            <div className="dish-list-item__count justify-align"><p>1</p></div>
                            <button className="dish-list-item__plus-minus justify-align">+</button>
                        </div>
                        <div className="dish-list__btn-wrapper">
                            <button className="dish-list__done-btn">
                                <svg width="21" height="15" viewBox="0 0 21 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="21" height="15" fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                            height="1">
                                            <use href="#image0"
                                                transform="translate(0 -0.2) scale(0.015625 0.021875)" />
                                        </pattern>
                                        <image id="image0" width="64" height="64"
                                            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAXVBMVEUAAAAhggsfgw0chAkfgw0egw0fgw0fgw0fgwwA/wAfgw0fgw0cgw4jhAkfgw0dgg4fgw0fgw0bgAkfgw0fggoghQshhBAfhA0dgw8fgw0egg4fgw0cgA4fgw0AAADpN3GfAAAAHXRSTlMAL8Yb69q/5ykB7OQlHcw13O8c7TEwH98j417HJBoagcsAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4wwHCyYnbqLPmgAAAMlJREFUWMPtlNkSgzAIRdPNrla7r/z/b9bJRMe0KAn3sfCK5yQTLzhnZQXVZDrD+DktEEPDE2LwPGAIPFEB8suV8cYbb3xUa4nfBH67Y/vlvoLOL2s6VBhPYwaJP9a+O2gQ378I/dOZbV+E93PuegtfsHdI+f9jhrT8DBtS8zdkSM8vb8jJP2fIm59fQ+78fRvy5zc2aOa/b9Dtj/ujTfVTzK9wB9KczxgU+y8yqPZnz6Dcv51ByXcGNR8MAO8NEN8k6vWGeKs/rA9IvThYdIJcnQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMi0wN1QxMTozODozOSswMDowMOmDhPsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTItMDdUMTE6Mzg6MzkrMDA6MDCY3jxHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==" />
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="dish-list-item">
                    <h3 className="dish-list-item__title">Боул с черникой и гранолой</h3>
                    <div className="dish-list-item__bottom-side">
                        <div className="dish-list-item__left-side">
                            <div className="dish-list-item__price justify-align"><p>250,00</p></div>
                            <button className="dish-list-item__plus-minus justify-align"><span>-</span></button>
                            <div className="dish-list-item__count justify-align"><p>1</p></div>
                            <button className="dish-list-item__plus-minus justify-align">+</button>
                        </div>
                        <div className="dish-list__btn-wrapper">
                            <button className="dish-list__done-btn">
                                <svg width="21" height="15" viewBox="0 0 21 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="21" height="15" fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                            height="1">
                                            <use href="#image0"
                                                transform="translate(0 -0.2) scale(0.015625 0.021875)" />
                                        </pattern>
                                        <image id="image0" width="64" height="64"
                                            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAXVBMVEUAAAAhggsfgw0chAkfgw0egw0fgw0fgw0fgwwA/wAfgw0fgw0cgw4jhAkfgw0dgg4fgw0fgw0bgAkfgw0fggoghQshhBAfhA0dgw8fgw0egg4fgw0cgA4fgw0AAADpN3GfAAAAHXRSTlMAL8Yb69q/5ykB7OQlHcw13O8c7TEwH98j417HJBoagcsAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4wwHCyYnbqLPmgAAAMlJREFUWMPtlNkSgzAIRdPNrla7r/z/b9bJRMe0KAn3sfCK5yQTLzhnZQXVZDrD+DktEEPDE2LwPGAIPFEB8suV8cYbb3xUa4nfBH67Y/vlvoLOL2s6VBhPYwaJP9a+O2gQ378I/dOZbV+E93PuegtfsHdI+f9jhrT8DBtS8zdkSM8vb8jJP2fIm59fQ+78fRvy5zc2aOa/b9Dtj/ujTfVTzK9wB9KczxgU+y8yqPZnz6Dcv51ByXcGNR8MAO8NEN8k6vWGeKs/rA9IvThYdIJcnQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMi0wN1QxMTozODozOSswMDowMOmDhPsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTItMDdUMTE6Mzg6MzkrMDA6MDCY3jxHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==" />
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="dish-list-item">
                    <h3 className="dish-list-item__title">Боул с черникой и гранолой</h3>
                    <div className="dish-list-item__bottom-side">
                        <div className="dish-list-item__left-side">
                            <div className="dish-list-item__price justify-align"><p>250,00</p></div>
                            <button className="dish-list-item__plus-minus justify-align"><span>-</span></button>
                            <div className="dish-list-item__count justify-align"><p>1</p></div>
                            <button className="dish-list-item__plus-minus justify-align">+</button>
                        </div>
                        <div className="dish-list__btn-wrapper">
                            <button className="dish-list__done-btn">
                                <svg width="21" height="15" viewBox="0 0 21 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="21" height="15" fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                            height="1">
                                            <use href="#image0"
                                                transform="translate(0 -0.2) scale(0.015625 0.021875)" />
                                        </pattern>
                                        <image id="image0" width="64" height="64"
                                            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAXVBMVEUAAAAhggsfgw0chAkfgw0egw0fgw0fgw0fgwwA/wAfgw0fgw0cgw4jhAkfgw0dgg4fgw0fgw0bgAkfgw0fggoghQshhBAfhA0dgw8fgw0egg4fgw0cgA4fgw0AAADpN3GfAAAAHXRSTlMAL8Yb69q/5ykB7OQlHcw13O8c7TEwH98j417HJBoagcsAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4wwHCyYnbqLPmgAAAMlJREFUWMPtlNkSgzAIRdPNrla7r/z/b9bJRMe0KAn3sfCK5yQTLzhnZQXVZDrD+DktEEPDE2LwPGAIPFEB8suV8cYbb3xUa4nfBH67Y/vlvoLOL2s6VBhPYwaJP9a+O2gQ378I/dOZbV+E93PuegtfsHdI+f9jhrT8DBtS8zdkSM8vb8jJP2fIm59fQ+78fRvy5zc2aOa/b9Dtj/ujTfVTzK9wB9KczxgU+y8yqPZnz6Dcv51ByXcGNR8MAO8NEN8k6vWGeKs/rA9IvThYdIJcnQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMi0wN1QxMTozODozOSswMDowMOmDhPsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTItMDdUMTE6Mzg6MzkrMDA6MDCY3jxHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==" />
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="dish-list__bottom-buttons">
                    <button className="dish-list__bottom-btn dish-list__next-btn">Далее</button>
                </div>
            </section>
        </div>
    );
};

export default DishOrder;