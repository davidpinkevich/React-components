import { SyntheticEvent } from 'react';
import { TPopup } from '../../../types/types';
import cross from '../../../assets/icons/cross.svg';
import './Popup.scss';

function Popup(props: TPopup) {
  const { changePopup, data, id, popup } = props;
  const infoItem = data.find((elem) => elem.id === id);

  return (
    <div
      className={popup ? 'popupContainer containerActive' : 'popupContainer'}
      onClick={() => changePopup(false)}
    >
      <div
        className={popup ? 'popupContent popupContentActive' : 'popupContent'}
        onClick={(e: SyntheticEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <div className="crossWrapper skewCross" onClick={() => changePopup(false)}>
          {<img src={cross} />}
        </div>
        {infoItem && (
          <>
            <h2>{infoItem.name}</h2>
            <div className="bookImgWrapper">
              <img src={`${infoItem.thumbnail.path}.${infoItem.thumbnail.extension}`} />
            </div>
            {infoItem.series.items && (
              <div className="otherInfo">
                <span>Series: </span>
                <div className="otherInfoScroll">
                  {!infoItem.series.items.length ? <p>This information is missing</p> : null}
                  {infoItem.series.items.map((elem, index) => (
                    <p key={index}>{elem.name}</p>
                  ))}
                </div>
              </div>
            )}
            {infoItem.comics.items && (
              <div className="otherInfo">
                <span>Comics: </span>
                {!infoItem.comics.items.length ? <p>This information is missing</p> : null}
                <div className="otherInfoScroll">
                  {infoItem.comics.items.map((elem, index) => (
                    <p key={index}>{elem.name}</p>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Popup;
