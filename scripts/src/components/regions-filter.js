import $ from 'jquery'
import {chain, pick, omit, filter, defaults} from 'lodash'

import TmplListGroupItem from '../templates/list-group-item'
import {setContent, slugify, createDatasetFilters, collapseListGroup} from '../util'

export default class {
  constructor (opts) {
    const regions = this._regionWithCount(opts.datasets, opts.params)
    const regionsMarkup = regions.map(TmplListGroupItem)
    setContent(opts.el, regionsMarkup)
    collapseListGroup(opts.el)
  }

  _regionsWithCount (datasets, params) {
    return chain(datasets)
      .groupBy('region')
      .map(function (datasetsInOrg, region) {
        const filters = createDatasetFilters(pick(params, ['category']))
        const filteredDatasets = filter(datasetsInOrg, filters)
        const orgSlug = slugify(region)
        const selected = params.region && params.region === orgSlug
        const itemParams = selected ? omit(params, 'region') : defaults({region: orgSlug}, params)
        return {
          title: region,
          url: '?' + $.param(itemParams),
          count: filteredDatasets.length,
          unfilteredCount: datasetsInOrg.length,
          selected: selected
        }
      })
      .orderBy('unfilteredCount', 'desc')
      .value()
  }
}
