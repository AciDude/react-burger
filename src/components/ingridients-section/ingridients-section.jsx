import React from 'react'
import IngridientCard from '../ingridient-card/ingridient-card'
import style from './ingridients-section.module.css'
import PropTypes from 'prop-types'
import { ingridientPropTypes } from '../../utils/prop-types.js'

export default function IngridientsSection({ title, ingridients }) {

   return (
      <div className="mb-10 mt-10 ml-4 mr-4">
         <h2 className="text text_type_main-medium mb-6">{title}</h2>
         <div className={style.ingridients}>
            {ingridients.map(ingridient => (
               <IngridientCard key={ingridient._id} ingridient={ingridient} />
            ))}
         </div>
      </div>
   )
}

IngridientsSection.propTypes = {
   title: PropTypes.string.isRequired,
   ingridients: PropTypes.arrayOf(ingridientPropTypes()).isRequired,
}