import { useSelector , useDispatch } from "react-redux";
import { getData } from "../store/action";
import { useEffect } from "react";

const Report = () => {
     let state = useSelector(state => state);

     console.log(state.reports.data)

     let dispatch = useDispatch();

     useEffect(()=>{
          dispatch(getData())
          console.log('DATA======>' ,state.reports)
     },[])


     return (
          <div className='reportCard'>
               
          <h1>COVID REPORT</h1>
          <hr />
               {
                    state.reports.data ? state.reports.data.map((e,i)=>{
                         return (
                              <>
                            

                              <h1>
                              Date : {e.date} State : {e.state} 
                              <br/>     
                              Total Cases : {e.total}
                              <br />
                              Deaths : {e.death}
                              </h1>
                              <h2>
                              Positives : {e.positive} || Negatives: {e.negative}
                              </h2>     
                              <hr />
                              
                              </>
                         )
                    })
              :"" } 
               

          </div>
     )
}

export default Report;
