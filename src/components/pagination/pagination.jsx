import React, {useState} from "react";
import styles from "../pagination/pagination.module.css";

let Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.paginationPortionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.paginationPortionSize + 1;
    let rightPortionPageNumber = portionNumber * props.paginationPortionSize;

    if (pagesCount > 1)
    {return (
        <div className ={styles.block}>
            {portionNumber >1 &&
            <button onClick ={()=>setPortionNumber(portionNumber -1)}>PREV</button>}
            {pages
                .filter ( p => (p >= leftPortionPageNumber && p <= rightPortionPageNumber))

                .map(p => {

                return <span key ={p}
                    className={props.currentPage === p && styles.currentPage}
                             onClick={(event) => {
                                 props.OnPageNumberChange(p, props.isFiltered, props.pageSize);
                             }}>
                    {`${p} `} </span>
            })
            }
            {portionNumber < portionCount &&
            <button onClick ={()=>setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>)}
    else return <div></div>

}
export default Pagination;