// https://www.codewars.com/kata/5a667bf8e6be382ecd000102/train/javascript

import React from 'react';

export const withTruncateParagraph = Component => {
  const func = ({children, textLength, ...restProps}) => {
    let lang = textLength !== undefined ? textLength : 10
    let text = textLength < 0 ? children : children.slice(0, lang) + '...'
    return <Component children={text} {...restProps}/>
  }
  func.displayName = `WithTruncateParagraph(${Component.displayName || Component.name || 'Component'})`
  return func
};