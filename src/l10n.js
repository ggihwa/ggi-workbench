export function getLanguage() {
  let language = window.localStorage.getItem('language');
  if (!language) {
    language = 'ko_KR';
  }

  return language;
}

class L10N {
  constructor(group) {
    this.dict = {};
    this.group = group;
  }

  _loadDictionary(language) {
    const lang = language || getLanguage();

    if (!(lang in this.dict)) {
      const dict = require(`./translations/${lang}/${this.group}.json`);
      const polyfillDict = this._polyfillDict(lang, this.group);
      this.dict[lang] = {...dict, ...polyfillDict};
    }

    return this.dict[lang];
  }

  _polyfillDict(lang, group) {
    const ditList = {
      loot: ['added', 'polyfill'],
    };

    if (!ditList[group]) {
      return {};
    }

    return ditList[group].reduce((dict, type) => {
      const addedDict = require(`./translations/${lang}/${group}-${type}.json`);
      return {...dict, ...addedDict};
    }, {});
  }

  get(key, language) {
    return this._loadDictionary(language)[key] || '';
  }

  formatString(key, context, language) {
    let localizedString = this.get(key, language);

    if (!localizedString) {
      return undefined;
    }

    if (context) {
      Object.keys(context).forEach(key => {
        localizedString = localizedString.replace(`{{${key}}}`, context[key]);
      });
    }

    return localizedString;
  }
}

export const loadTrans = group => new L10N(group);

export default new L10N('store');
