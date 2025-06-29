import UseContext from '../Context'
import { useContext } from "react";
import Draggable from 'react-draggable'
import { motion } from 'framer-motion';
import bulb from '../assets/bulb.png'
import '../css/Patch.css'
import patchNotes from '../../patchNotes';



function Patch() {

  const { 
    themeDragBar,
    PatchExpand, setPatchExpand,
    StyleHide,
    isTouchDevice,
    handleSetFocusItemTrue,
    inlineStyleExpand,
    inlineStyle,
    deleteTap,
    imageMapping,

   } = useContext(UseContext);

    function handleDragStop(event, data) {
        const positionX = data.x 
        const positionY = data.y
        setPatchExpand(prev => ({
          ...prev,
          x: positionX,
          y: positionY
        }))
    }


  return (
    <>
      <Draggable
        axis="both" 
        handle={'.folder_dragbar-resumefile'}
        grid={[1, 1]}
        scale={1}
        disabled={PatchExpand.expand}
        bounds={{top: 0}}
        defaultPosition={{ 
          x: window.innerWidth <= 500 ? 40 : 80,
          y: window.innerWidth <= 500 ? 100 : 90,
        }}
        onStop={(event, data) => handleDragStop(event, data)}
        onStart={() => handleSetFocusItemTrue('About')}
      >
        <div
            className='folder_folder-resumefile'
            onClick={(e) => {
                e.stopPropagation();
                handleSetFocusItemTrue('About');
            }}
            style={{
                height: window.innerHeight <= 700 ? '80%' : '',
                width: '200px',
                resize: 'none',
                ...(PatchExpand.expand ? inlineStyleExpand('About') : inlineStyle('About'))
            }}
            >
          <div className="folder_dragbar-resumefile"
             style={{ background: PatchExpand.focusItem? themeDragBar : '#757579'}}
          >
            <div className="folder_barname-resumefile">
                <img src={imageMapping('About')} alt="Patch" />
                <span>About</span>
            </div>
            <div className="folder_barbtn-resumefile">
              <div onClick={ !isTouchDevice? (e) => {
                e.stopPropagation()
                setPatchExpand(prev => ({...prev, hide: true, focusItem: false}))
                StyleHide('About') 
              } : undefined
            }
                   onTouchEnd={(e) => {
                    e.stopPropagation()
                    setPatchExpand(prev => ({...prev, hide: true, focusItem: false}))
                    StyleHide('About')
                  }}
                  onTouchStart={(e) => e.stopPropagation()}
              >
                <p className='dash-resumefile'></p>
              </div>
              <div>
                <motion.div className={`expand-resumefile ${PatchExpand.expand ? 'full' : ''}`}
                    style={{borderColor: 'grey'}} 
                >
                </motion.div>
                {PatchExpand.expand ? 
                (
                <div className="expand_2-resumefile"></div>
                )
                :
                (null)}
              </div>
              <div>
                <p className='x-resumefile'
                 onClick={!isTouchDevice ? () => {
                  deleteTap('About')
                 }: undefined
                }
                onTouchEnd={() => {
                  deleteTap('About')
              }}
                >×</p>
              </div>
            </div>
          </div>

          <div className="content_container">
            <div className="patch_note">
                <div className="patch_head">
                    <img src={bulb} alt="bulb" />  
                    <h1>About us.</h1> 
            </div>
            <div className="patch_log">
  <p>
    <strong>KOPOD</strong> lahir dari pertanyaan simple: kenapa obrolan paling seru tentang dunia digital selalu terjadi di coffee shop atau co-working space, tapi gak pernah ke-record buat orang lain?<br/>
    Sering banget ketemu sama talents yang punya cerita gila—coders yang belajar programming dari YouTube terus sekarang kerja remote buat perusahaan luar, designers yang portfolionya viral di socmed, data analysts yang insights-nya ngubah strategi bisnis besar. Tapi cerita mereka cuma beredar di circle sendiri.
  </p>
  <br/>
  <br/>
  <p>
    <strong>Host:</strong> Ridho Pratama<br/>
    <strong>Co-host:</strong> Yute October
  </p>
  <p>
    Dengarkan episode terbaru di Spotify:<br/>
    <a href="https://open.spotify.com/show/68Qxbxj9lmsyxOI6vlG2m8" target="_blank" rel="noopener noreferrer" style={{ color: '#1DB954', fontWeight: 'bold', textDecoration: 'underline' }}>
      KOPOD Podcast di Spotify
    </a>
  </p>
            </div>
            </div>
          </div>
        </div>
      </Draggable>
    </>
  )
}          


export default Patch
