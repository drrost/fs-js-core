import React from 'react'
import {StringUtils} from "@fast-stream/string-utils";
import {DateUtils} from "@fast-stream/date-utils";
import {NameUtils} from "@fast-stream/name-utils";

const App = () => {
    return (
        <>
            <div>{'Strings: ' + StringUtils.uuid()}</div>
            <div>{'Date: ' + DateUtils.getCurrentDate()}</div>
            <div>{'Name: ' + NameUtils.short('Smith John')}</div>
        </>
    )
}

export default App
