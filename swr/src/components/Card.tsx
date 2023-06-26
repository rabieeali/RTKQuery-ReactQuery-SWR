import React from 'react';

interface Props {
  body: string;
  title: string;
  id: number;
}

const Card = React.forwardRef<HTMLElement, Props>(
  ({ body, title, id }, ref) => {
    const content = ref ? (
      <article ref={ref} className='card h-100 w-100 p-1'>
        <h1 className='fs-6 fw-bolder text-warning'>{title}</h1>
        <p>{body}</p>
        <small className='mt-auto ms-auto'>{id}</small>
      </article>
    ) : (
      <article className='card h-100 w-100 p-1'>
        <h1 className='fs-6 fw-bolder text-warning'>{title}</h1>
        <p>{body}</p>
        <small className='mt-auto ms-auto'>{id}</small>
      </article>
    );

    return content;
  }
);

export default Card;
