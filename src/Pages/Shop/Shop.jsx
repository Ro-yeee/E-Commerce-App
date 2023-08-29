import { useDispatch, useSelector } from "react-redux"
import SideNav from "../../components/SideNav/SideNav"
import "./Shop.css"
import { ToastContainer } from "react-toastify"
import ProductGridView from "../../components/ProductGridView/ProductGridView"
import { Search, Sort, SortByCategory, clearFilters, setCategory, setGridView, setListView, setQuery, setSorting} from "../../slices/filters"
import { useEffect } from "react"
import ProductListView from "../../components/ProductListView/ProductListView"
import { GridViewSharp, TableRowsSharp } from "@mui/icons-material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilterCircleXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"



function Shop() {

  const products = useSelector(state => state.filters.filteredProducts)
  const sortVal = useSelector(state => state.filters.sorting_value)
  const isGridView = useSelector(state => state.filters.isGridView)
  const query = useSelector(state => state.filters.query)
  const categories = useSelector(state => state.products.categories)
  const categoryVal = useSelector(state => state.filters.category_value)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(Search())
    dispatch(Sort())
    dispatch(SortByCategory())
  },[sortVal,query,categoryVal])

  return (
    <div className="Shop">
        <SideNav/>
        <div className="ShopContainer">
            <div className="ShopTopBar">
                <div className="ShopControls">
                    <div className="listBtns">
                        <TableRowsSharp 
                            className={isGridView ? "listbtn" : "listBtnActive listbtn"} 
                            onClick={()=>dispatch(setListView())} />
                        <GridViewSharp 
                            className={isGridView ? "listBtnActive listbtn" : "listbtn"} 
                            onClick={()=>dispatch(setGridView())} />
                    </div>
                    <div className="SearchBar">
                        <FontAwesomeIcon 
                            icon={faMagnifyingGlass}/>
                        <input 
                            placeholder="Search.." 
                            value={query} 
                            type="text" 
                            onChange={(e)=>dispatch(setQuery(e.target.value))} />
                    </div>
                    <FontAwesomeIcon 
                        className="filterClearBtnDesktop" 
                        icon={faFilterCircleXmark} 
                        size="lg"
                        onClick={() => dispatch(clearFilters())}/>
                    <div className="Category">
                        <select 
                            value={categoryVal} 
                            name="categorySort" 
                            id="categorySort" 
                            onChange={(e)=>dispatch(setCategory(e.target.value))}>
                            {
                                categories.map((element,index)=>(
                                    <option 
                                        value={element} 
                                        key={index}>
                                        {element.charAt(0).toUpperCase() + element.substr(1).toLowerCase()}
                                    </option>
                                ))
                            }                        
                        </select>
                    </div>
                    <div className="Sorting">
                        <select value={sortVal} name="sort" id="sort" onChange={(e)=>dispatch(setSorting(e.target.value))}>
                            <option value="" disabled hidden>Sort</option>
                            <option value="a-z">A-Z</option>
                            <option value="z-a">Z-A</option>
                            <option value="low-high">Lowest(Price)</option>
                            <option value="high-low">Highest(Price)</option>
                        </select>
                    </div>
                </div>
                <div className="ProductQuantity">
                    <h4 style={{textAlign:"center"}}>{products.length} Products Found</h4>
                    <FontAwesomeIcon 
                        className="filterClearBtnMobile" 
                        icon={faFilterCircleXmark} 
                        size="xl"
                        onClick={() => dispatch(clearFilters())}/>
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
