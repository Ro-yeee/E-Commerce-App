import { useDispatch, useSelector } from "react-redux"
import SideNav from "../../components/SideNav/SideNav"
import "./Shop.css"
import { ToastContainer } from "react-toastify"
import ProductGridView from "../../components/ProductGridView/ProductGridView"
import { Sort, setSorting, toggleView } from "../../slices/filters"
import { useEffect } from "react"
import ProductListView from "../../components/ProductListView/ProductListView"
import { GridViewSharp, TableRowsSharp, } from "@mui/icons-material"



function Shop() {

  const products = useSelector(state => state.filters.filteredProducts)
  const sortVal = useSelector(state => state.filters.sorting_value)
  const isGridView = useSelector(state => state.filters.isGridView)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(Sort())
  },[sortVal])

  return (
    <div className="Shop">
        <SideNav/>
        <div className="ShopContainer">
            <div className="ShopControls">
                <div className="listBtns">
                    <TableRowsSharp className={isGridView ? "listbtn" : "listBtnActive listbtn"} onClick={()=>dispatch(toggleView())} />
                    <GridViewSharp className={isGridView ? "listBtnActive listbtn" : "listbtn"} onClick={()=>dispatch(toggleView())} />
                </div>
                <div className="SearchBar">
                    BAR
                </div>
                <div className="Sorting">
                    <select value={sortVal} name="sort" id="sort" onChange={(e)=>dispatch(setSorting(e.target.value))}>
                        <option value="" disabled hidden>Sort..</option>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                        <option value="low-high">Price(Low-High)</option>
                        <option value="high-low">Price(High-Low)</option>
                    </select>
                </div>
            </div>
            {
                isGridView ? <ProductGridView products={products}/> :  <ProductListView products={products}/>
            }
        </div>
        <ToastContainer />
    </div>
  )
}

export default Shop
