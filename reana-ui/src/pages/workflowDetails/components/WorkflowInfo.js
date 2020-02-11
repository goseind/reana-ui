/*
  -*- coding: utf-8 -*-

  This file is part of REANA.
  Copyright (C) 2020 CERN.

  REANA is free software; you can redistribute it and/or modify it
  under the terms of the MIT License; see LICENSE file for more details.
*/

import React from "react";
import PropTypes from "prop-types";

export default function WorkflowInfo({ workflow }) {
  return (
    <>
      <div>{workflow.name}</div>
      <div>{workflow.status}</div>
    </>
  );
}

WorkflowInfo.propTypes = {
  workflow: PropTypes.object.isRequired
};
