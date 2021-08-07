import React, {useEffect, useState} from 'react'
import Header from "../header";
import InputAdornments from "./InputAdornments";
import {FormWrapper} from "../style";

const Mentor = (props) => {

    return (
      <div>
        <Header />
        <FormWrapper>
          <InputAdornments />
        </FormWrapper>
      </div>
    )

}

export default Mentor;