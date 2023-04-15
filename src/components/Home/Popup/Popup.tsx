import { SyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activePopup } from '../homeSlice';
import { TPopup, TStore } from '../../../types/types';
import cross from '../../../assets/icons/cross.svg';
import './Popup.scss';

function Popup(props: TPopup) {
  const { data, id } = props;
  const infoItem = data.find((elem) => elem.id === id);

  const { popup } = useSelector((state: TStore) => state.home);

  const dispatch = useDispatch();

  return (
    <div
      className={popup ? 'popupContainer containerActive' : 'popupContainer'}
      onClick={() => dispatch(activePopup(false))}
    >
      <div
        className={popup ? 'popupContent popupContentActive' : 'popupContent'}
        onClick={(e: SyntheticEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <div className="crossWrapper skewCross" onClick={() => dispatch(activePopup(false))}>
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
