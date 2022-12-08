import { Rating, RatingControls, RatingGroup, RatingLabel } from '.'

export const Basic = () => (
  <RatingGroup max={5} value={1} allowHalf>
    <RatingLabel>Label</RatingLabel>
    <RatingControls>
      {(context) =>
        context().sizeArray.map((index) => (
          <Rating index={index}>
            {({ isHalf, isHighlighted }) => {
              if (isHalf) return <IconHalf />
              if (isHighlighted) return <IconFull />
              return <IconEmpty />
            }}
          </Rating>
        ))
      }
    </RatingControls>
  </RatingGroup>
)

const IconHalf = () => (
  <svg
    viewBox="0 0 273 260"
    data-part="star"
    style={{
      width: '1em',
      color: '#ffb400',
    }}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M135.977 214.086L52.1294 259.594L69.6031 165.229L0 99.1561L95.1465 86.614L135.977 1.04785V214.086Z"
      fill="currentColor"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M135.977 213.039L219.826 258.546L202.352 164.181L271.957 98.1082L176.808 85.5661L135.977 0V213.039Z"
      fill="#bdbdbd"
    ></path>
  </svg>
)

const IconEmpty = () => (
  <svg
    viewBox="0 0 273 260"
    data-part="star"
    style={{
      width: '1em',
      color: '#bdbdbd',
    }}
  >
    <path
      d="M136.5 0L177.83 86.614L272.977 99.1561L203.374 165.229L220.847 259.594L136.5 213.815L52.1528 259.594L69.6265 165.229L0.0233917 99.1561L95.1699 86.614L136.5 0Z"
      fill="currentColor"
    ></path>
  </svg>
)

const IconFull = () => (
  <svg
    viewBox="0 0 273 260"
    data-part="star"
    style={{
      width: '1em',
      color: '#ffb400',
    }}
  >
    <path
      d="M136.5 0L177.83 86.614L272.977 99.1561L203.374 165.229L220.847 259.594L136.5 213.815L52.1528 259.594L69.6265 165.229L0.0233917 99.1561L95.1699 86.614L136.5 0Z"
      fill="currentColor"
    ></path>
  </svg>
)