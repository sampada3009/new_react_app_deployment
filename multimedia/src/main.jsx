import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Images} from './Component/Images.jsx'
import {Videos} from './Component/Videos.jsx'
import {Audio} from './Component/Audio.jsx'
import {DataJson} from './Component/DataJson.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Images />
    
    <Audio />
    {/* <Videos /> */}
    <DataJson />
  </StrictMode>,
)
