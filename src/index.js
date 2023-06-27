import React from "react";
import { createRoot } from 'react-dom/client';
import Routing from "../src/routes/root";
/** initialize cornerstone */

const root = createRoot(document.getElementById('root'));
root.render(<Routing />);