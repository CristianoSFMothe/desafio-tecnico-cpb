function waitElement(el) {
  try {
    cy.get(el).and('be.visible');
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return waitElement;
}

function waitElement_index(el, index) {
  try {
    cy.get(el).eq(index, { timeout: 10000 })
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return waitElement_index;
}

function loadPage(url) {
  try {
    cy.visit(url)
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return waitElement_index;
}

function set(el, text) {
  waitElement(el)
  try {
    cy.get(el).type(text)
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return set;
}

function set_Index(el, text, index) {
  waitElement(el)
  try {
    cy.get(el).eq(index).type(text)
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return set_Index;
}

function click(el, text = null) {
  waitElement(el)
  try {
    if (text) {
      cy.get(el).contains(text).click()
    } else {
      cy.get(el).click()
    }
  } catch (error) {
    cy.log('Exception caught: ' + error.message)
  }
  return click
}


function clickRemoveTarget(el) {
  waitElement(el)
  try {
    cy.get(el)
      .invoke('removeAttr', 'target')
      .click({ force: true }).visit('https://homolognovocadastro.cpb.org.br/public/clubes-externos');
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return clickRemoveTarget;
}

function clickForce(el) {
  waitElement(el)
  try {
    cy.get(el).click({ force: true });
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return click;
}

function click_index(el, index) {
  waitElement_index(el, index)
  try {
    cy.get(el).eq(index).click();
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return click_index;
}

function click_indexForce(el, index) {
  waitElement_index(el, index)
  try {
    cy.get(el).eq(index).click({ force: true });
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return click_index;
}

function click_text(el, text) {
  waitElement(el)
  try {
    cy.get(el).and('contain', text).click();
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return click_text;
}

function clear(el) {
  waitElement(el)
  try {
    cy.get(el).clear();
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return clear;
}

function clear_index(el, index) {
  waitElement_index(el, index)
  try {
    cy.get(el).eq(index).clear();
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return clear_index;
}

function get_text(el) {
  waitElement(el)
  let text
  try {
    text = cy.get(el).invoke('text');
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return text;
}

function get_texts(el, index1, index2) {
  waitElement(el)
  try {
    return cy.get(el).then($elements => {
      const text1 = $elements.eq(index1).text().trim();
      const text2 = $elements.eq(index2).text().trim();
      return [text1, text2]
    })
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
}

function get_text_index(el, index) {
  waitElement(el)
  let text
  try {
    text = cy.get(el).eq(index).invoke('text');
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return text;
}

function scrollTo(el) {
  waitElement(el)
  try {
    cy.get(el).scrollIntoView();
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return scrollTo;
}

function replaceIN(el, v1, v2) {
  waitElement(el)
  let corretValue = '';
  try {
    cy.get(el)
      .should('be.visible')
      .invoke('text')
      .then(text => {
        corretValue = text.replace(v1, v2);
      })
  } catch (error) {
    cy.log('Exception caught when getting element text ' + el + ': ' + error.message);
  }
  return corretValue;
}

function splitIn(el, index) {
  waitElement(el)
  let corretValue = '';
  try {
    cy.get(el)
      .should('be.visible')
      .invoke('text')
      .then(text => {
        corretValue = text.split(' ')[index];
      })
  } catch (error) {
    cy.log('Exception caught when getting element text ' + el + ': ' + error.message);
  }
  return corretValue;
}

module.exports = {
  set, click, clickRemoveTarget, waitElement, waitElement_index, click_index,
  clear, get_text, scrollTo, get_text_index, replaceIN, splitIn,
  click_text, loadPage, set_Index, clickForce, click_indexForce, clear_index,
  get_texts
};