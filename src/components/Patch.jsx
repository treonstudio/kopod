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
  <h2 style={{ fontSize: '1.1em', marginBottom: '0.5em' }}>KOPOD: Kode Podcast – Kupas Tuntas, Inspirasi Tanpa Batas!</h2>
  <p>Halo, para developer, programmer, dan tech enthusiast di seluruh Indonesia! Selamat datang di <strong>KOPOD (Kode Podcast)</strong>, podcast yang akan jadi teman setia kamu dalam menyelami samudra luas dunia teknologi, engineering, dan tren pemrograman terkini. <strong>KOPOD</strong> adalah inisiatif dari <strong>Treon Studio</strong>, sebuah studio software inovatif yang berdedikasi menjadi mitra teknologi untuk pertumbuhan bisnis.</p>
  <ul style={{ margin: '0 0 1em 1.2em', padding: 0 }}>
    <li><strong>Teknologi Terbaru:</strong> Dari AI, Machine Learning, Blockchain, hingga Cloud Computing, kami akan mengupas tuntas apa saja yang lagi hangat dan gimana teknologi ini membentuk masa depan kita.</li>
    <li><strong>Engineering Insights:</strong> Selami dunia rekayasa perangkat lunak, arsitektur sistem, best practices dalam coding, dan strategi pengembangan yang efisien dari para pakar di bidangnya.</li>
    <li><strong>Tren Pemrograman:</strong> Ikuti perkembangan bahasa pemrograman, framework, dan tool yang wajib kamu kuasai untuk tetap relevan di industri yang bergerak cepat ini.</li>
    <li><strong>Karier & Pengembangan Diri:</strong> Dapatkan tips dan trik untuk meningkatkan skill, membangun portofolio, hingga menavigasi karier di dunia teknologi yang dinamis.</li>
  </ul>
  <p>Bareng para narasumber inspiratif, mulai dari praktisi industri, developer sukses, hingga inovator terkemuka, KOPOD akan jadi sumber wawasan yang tak ternilai buat kamu. Kami akan membahas isu-isu nyata, membedah tantangan, dan memberikan solusi yang bisa langsung kamu terapkan.</p>
  <p>Jadi, siapkan kopi terbaik kamu, pasang headphone, dan mari kita ngoprek bareng di <strong>KOPOD</strong>! Jangan sampai ketinggalan setiap episode dan jadilah bagian dari komunitas developer yang terus berkembang.</p>
  <div style={{ marginTop: '1em' }}>
    <a href="https://open.spotify.com/show/68Qxbxj9lmsyxOI6vlG2m8?si=8oW_7VLdSfS8UoCmBvtfkA" target="_blank" rel="noopener noreferrer" style={{ color: '#1DB954', fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.1em' }}>
      Dengarkan KOPOD di Spotify
    </a>
  </div>
</div>
            </div>
          </div>
        </div>
      </Draggable>
    </>
  );
}


export default Patch
