import { useState } from "react";

import closeIcon from "/icons/close.png";
import downArrowIcon from "/icons/down-arrow.svg";

import css from "./CourseContentComponent.module.css";

const CourseContentComponent = (props) => {
  const { title = "", data = [] } = props;
  const [toggleBox, setToggleBox] = useState({});
  let desc = "asdasdsad";
  return (
    <div className={css.outterDiv}>
      <div className={css.innerDiv}>
        <div className={css.titleBox}>
          <span className={css.ttl}>{title}</span>
          <span className={css.imgBox}>
            <img src={closeIcon} alt="close icon" className={css.closeIcon} />
          </span>
        </div>
        <div className={css.bdy}>
          {data?.map((item, id) => {
            return (
              <div
                className={css.tab}
                key={`tab-${id}`}
                onClick={() =>
                  setToggleBox((p) => {
                    return { ...p, [id]: !p[id] };
                  })
                }
              >
                <div className={css.tabTitleBox}>
                  <div className={css.tabTitleLeft}>
                    <div className={css.tabTtl}>{`Section ${id + 1}`}</div>
                    <div className={css.tabDesc}>
                      <span>10/10</span>
                      <span></span>
                      <span>40 min</span>
                    </div>
                  </div>
                  <div className={css.tabTitleRight}>
                    <img
                      src={downArrowIcon}
                      alt="down arrow"
                      className={[
                        css.icon,
                        toggleBox[id] ? css.iconReverse : null,
                      ].join(" ")}
                    />
                  </div>
                </div>
                {toggleBox[id] ? (
                  <div className={css.tabBdy}>{desc}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseContentComponent;