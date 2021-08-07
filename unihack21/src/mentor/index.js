import React, {useEffect, useState} from 'react'
import Header from "../header";
import InputAdornments from "./InputAdornments";
import {FormWrapper, Title} from "../style";

const Mentor = (props) => {

    return (
      <div>
        <Header />
        <Title> mentor application </Title>
        <FormWrapper>
          <InputAdornments />
        </FormWrapper>
      </div>
    )

}

export default Mentor;