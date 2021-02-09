import React, {useState} from 'react';

const MealsPageItem = ({meal}) => {
    const [mealStatus, setMealStatus] = useState()
    const setMealIsActive = (status) => {
        if(status === 'В наличии' ){
            setMealStatus(true);
        } else {
            setMealStatus(false)
        }
    }
    return (
        <tr>
            <td>{meal.name}</td>
            <td>{meal.categoryName}</td>
            <td>
                <input type="checkbox" name="good" id="meals-page__chekbox1"
                       className="meals-page__checkbox-toggle"
                       defaultChecked={mealStatus} />
                <label htmlFor="meals-page__chekbox1" className="meals-page__checkbox-label">
                    <span className="meals-page__checkbox-ball"></span></label>
            </td>
            <td>{meal.weight}гр</td>
            <td>{meal.price}сом</td>
            <td>
                <div className="meals-page__table-btn-wrapper">
                    <button className="meals-page__table-btn">
                        <svg height="325pt" viewBox="0 0 325 325.37515" width="325pt"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m114.6875 284.675781-73.800781-73.800781 178.5-178.5 73.800781 73.800781zm-80.699219-60.800781 67.699219 67.699219-101.5 33.800781zm281.898438-140.300781-12.800781 12.800781-73.898438-73.898438 12.800781-12.800781c12.894531-12.902343 33.804688-12.902343 46.699219 0l27.199219 27.199219c12.800781 12.9375 12.800781 33.765625 0 46.699219zm0 0"/>
                        </svg>
                    </button>
                    <button className="meals-page__table-btn">
                        <svg id="Layer_1" viewBox="0 0 512 512" space="preserve"
                             xmlns="http://www.w3.org/2000/svg"><g><path d="M89.4,100l26.2,347.9c2.5,32.5,29.6,58.1,60.7,58.1h159.3c31.1,0,58.2-25.6,60.7-58.1L422.6,100H89.4z M190.1,460.8   c0.3,7.1-5.1,12.7-12,12.7s-12.7-5.7-13.1-12.7l-14.6-296.6c-0.5-9.6,5.7-17.4,13.8-17.4s14.9,7.8,15.3,17.4L190.1,460.8z    M268.5,460.8c0,7.1-5.7,12.7-12.5,12.7s-12.5-5.7-12.5-12.7l-2-296.6c-0.1-9.6,6.4-17.4,14.5-17.4c8.1,0,14.6,7.8,14.5,17.4   L268.5,460.8z M346.9,460.8c-0.3,7.1-6.2,12.7-13.1,12.7s-12.2-5.7-12-12.7l10.6-296.6c0.3-9.6,7.2-17.4,15.3-17.4   c8.1,0,14.3,7.8,13.8,17.4L346.9,460.8z"/><path
                            d="M445.3,82.8H66.7v0c-1.8-21.1,10.7-38.4,27.9-38.4h322.9C434.6,44.4,447.1,61.8,445.3,82.8L445.3,82.8z"
                            id="XMLID_2_"/><path
                            d="M324.3,58.6H187.7l-0.2-7.8C186.7,26.3,202.1,6,221.9,6h68.3c19.7,0,35.1,20.3,34.4,44.7L324.3,58.6z"
                            id="XMLID_1_"/></g></svg>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default MealsPageItem;