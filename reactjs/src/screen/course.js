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
</div>

    )
}

export default withRouter(Course)