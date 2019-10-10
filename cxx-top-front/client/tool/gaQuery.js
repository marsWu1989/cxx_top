import gt from './gaType'

export default (body, down) => {
  if (!down) {
    window.ga(
      'JDY.send',
      'pageview',
      gt[body.downloadType].query,
      {
        dimension3: `分析维度_${body.carDimType}_${body.carDimID}_${body.categoryType}_${body.categoryID}_${body.competeCondition}_时间范围_${body.startDateType}_${body.startDate}_${body.endDate}_地域选择_${body.spaceDimType}_${body.spaceDimID}_动力类型_${body.powerID || body.powerCategoryID}_价格范围_${body.minGuidePrice}_${body.maxGuidePrice}`,
      },
    )
    window.ga(
      'JDY.send',
      'event',
      gt[body.downloadType].query1,
      gt[body.downloadType].query2,
      gt[body.downloadType].query3,
    )
  } else {
    window.ga(
      'JDY.send',
      'pageview',
      gt[body.downloadType].exp,
      {
        dimension4: `分析维度_${body.carDimType}_${body.carDimID}_${body.categoryType}_${body.categoryID}_${body.competeCondition}_时间范围_${body.startDateType}_${body.startDate}_${body.endDate}_地域选择_${body.spaceDimType}_${body.spaceDimID}_动力类型_${body.powerID || body.powerCategoryID}_价格范围_${body.minGuidePrice}_${body.maxGuidePrice}`,
      },
    )
    window.ga(
      'JDY.send',
      'event',
      gt[body.downloadType].query1,
      gt[body.downloadType].query2,
      gt[body.downloadType].exp3,
    )
  }
}
