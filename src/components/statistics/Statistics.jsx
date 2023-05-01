import React from "react";
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function generateRandomColor() {
  const hexValues = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }

  return color;
}

export const Statistics = ({ title, stats }) => {
    return (
      <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.list}>
          {stats.map(stat => (
            <li
              className={css.item}
              key={stat.id}
              style={{ backgroundColor: generateRandomColor() }}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
}
 
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

