import {withRouter} from 'react-router';
import SearchField from "react-search-field";
import React, { useState } from "react";

function Course() {
    const [email , setEmail ] = useState("")
    return (
        <div class="container-fluid details-page-bg">
            
            <div row>
                
                <div class="col-xs-12 text-right">
        <SearchField
  placeholder="Search..."
  
  searchText=""
  classNames="test-class"
/>
</div>
</div>


   

         <div class="row">
  <div class="col-xs-12">
    <div class="row viewport contact-banner-container  contact-olxpeople-viewport">
      <div class="container wow animate_animated animate__zoomIn text-center">
        <h3 class="h3 text-white m-y-axis-md p-y-axis-lg line-height-64 text-bold static-title">Posts are coming soon<br/>Stay tuned...</h3>
       
      </div>
    </div>
    </div>
    </div>
</div>

    )
}

export default withRouter(Course)