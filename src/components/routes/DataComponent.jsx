import React from 'react';
import SingleInvoice from "./SingleInvoice.jsx";

function DataComponent(props) {
    const {idDataComponent,setSaveData1} = props
    return (
        <div>
            <SingleInvoice dataAfg={idDataComponent} DataSave1={setSaveData1}/>
        </div>
    );
}

export default DataComponent;