//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {PathStats} from "jec-commons";

/*!
 * This module constains utilities used by the WalkPathUtilTest test suite.
 */

// Utilities:
export const VALID_PATH:string = "./utils/test-utils/classes/walkpath-test-utils";
export const NUM_DIRS:number = 1;
export const NUM_FILES:number = 6;
export const VALID_EMPTY_PATH:string = "./utils/test-utils/classes/walkpath-empty-directory";
export const PATH_STATS:PathStats = new PathStats(VALID_EMPTY_PATH);
