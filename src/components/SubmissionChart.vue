<template>
    <div class="submission-chart">
        <div class="users-header">
            <h3>
                github贡献度
            </h3>
        </div>
        <div class="calendar">
            <div class="weeks">
                <div class="week">周二</div>
                <div class="week">周四</div>
                <div class="week">周六</div>
            </div>
            <div class="column" v-for="(columnData, columnIndex) in dateData" :key="columnIndex">
                <div class="title">{{ columnData.title }}</div>
                <div class="date-wrapper" v-for="(dateData, dateIndex) in columnData.data" :key="dateIndex"
                    :style="`background:${getColor(dateData.number)};`">
                </div>
            </div>
        </div>
        <div class="operation">
            <div class="slider">
                <div class="slider-desc">0</div>
                <div style="width:120px;">
                </div>
                <div class="slider-desc">9+</div>
            </div>
            <div class="legend">
                <div class="level-desc">少</div>
                <div class="level level-1"></div>
                <div class="level level-2"></div>
                <div class="level level-3"></div>
                <div class="level level-4"></div>
                <div class="level level-5"></div>
                <div class="level-desc">多</div>
            </div>
        </div>
        <div class="contribution-describtion">
            <p>最近一年贡献: {{ times.longest }} 次</p>
            <p>最长连续贡献:{{ times.longestContinuous }}日</p>
            <p>最近连续贡献:{{ times.latestContinuous }}日</p>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'submission-chart',
    data() {
        return {
            dateData: [],
            submissionRecord: {},
            sliderValue: [0, 12],
            profile: [
                {
                    date: '2021-10-24',
                    status: 18
                },
                {
                    date: '2021-10-25',
                    status: 10
                },
                {
                    date: '2021-10-26',
                    status: 7
                },
                {
                    date: '2021-10-27',
                    status: 2
                },
                {
                    date: '2021-10-28',
                    status: 1
                },
                {
                    date: '2021-10-29',
                    status: 1
                },
                {
                    date: '2021-10-30',
                    status: 1
                },
                {
                    date: '2021-10-31',
                    status: 1
                },
                {
                    date: '2021-11-01',
                    status: 2
                },
                {
                    date: '2021-11-09',
                    status: 1
                },
                {
                    date: '2021-11-17',
                    status: 1
                },
                {
                    date: '2021-11-28',
                    status: 1
                },
                {
                    date: '2021-11-29',
                    status: 1
                },
                {
                    date: '2021-11-30',
                    status: 1
                },
                {
                    date: '2021-12-01',
                    status: 1
                },
                {
                    date: '2021-12-02',
                    status: 3
                },
                {
                    date: '2021-12-28',
                    status: 3
                },
                {
                    date: '2022-01-05',
                    status: 4
                },
                {
                    date: '2022-03-25',
                    status: 2
                },
                {
                    date: '2022-03-26',
                    status: 5
                },
                {
                    date: '2022-03-27',
                    status: 1
                },
                {
                    date: '2022-03-29',
                    status: 1
                },
                {
                    date: '2022-03-30',
                    status: 1
                },
                {
                    date: '2022-03-31',
                    status: 1
                },
                {
                    date: '2022-04-10',
                    status: 1
                },
                {
                    date: '2022-04-23',
                    status: 4
                }, {
                    date: '2022-04-24',
                    status: 3
                }, {
                    date: '2022-04-26',
                    status: 3
                }, {
                    date: '2022-04-27',
                    status: 2
                }, {
                    date: '2022-04-28',
                    status: 1
                }, {
                    date: '2022-04-30',
                    status: 2
                },
                {
                    date: '2022-05-01',
                    status: 1
                },
                {
                    date: '2022-05-02',
                    status: 3
                },
                {
                    date: '2022-05-03',
                    status: 2
                },
                {
                    date: '2022-05-04',
                    status: 5
                },
                {
                    date: '2022-05-05',
                    status: 2
                },
                {
                    date: '2022-05-06',
                    status: 4
                },
                {
                    date: '2022-05-07',
                    status: 2
                },
                {
                    date: '2022-05-08',
                    status: 3
                },
                {
                    date: '2022-05-09',
                    status: 5
                },
                {
                    date: '2022-05-10',
                    status: 2
                },
                {
                    date: '2022-05-11',
                    status: 2
                },
                {
                    date: '2022-05-12',
                    status: 1
                },
                {
                    date: '2022-05-14',
                    status: 2
                },
                {
                    date: '2022-05-15',
                    status: 2
                },
                {
                    date: '2022-05-16',
                    status: 1
                },
                {
                    date: '2022-05-17',
                    status: 1
                },
                {
                    date: '2022-05-18',
                    status: 2
                },
                {
                    date: '2022-05-19',
                    status: 4
                },
                {
                    date: '2022-05-20',
                    status: 1
                },
                {
                    date: '2022-05-23',
                    status: 2
                },
            ],
            size: 2,
            times: {
                longest: 123,
                longestContinuous: 13,
                latestContinuous: 6,
            }
        }
    },
    mounted() {
        this.formatProblemData()
        this.init()
    },
    methods: {
        init() {
            // 上一年信息
            let prevYear = moment().format('YYYY') - 1
            let prevTodayFormatStr = prevYear + '-' + moment().format('MM-DD')
            let prevToday = moment(prevTodayFormatStr).format('YYYY-MM-DD')
            // 上年今日的是星期几
            let prevTodayWeekNum = moment(prevToday).weekday() || 7
            // 初始日期（上年临近的星期一）
            let firstMondayDate = prevTodayWeekNum > 1 ? moment(prevToday).add(8 - prevTodayWeekNum, 'days').format('YYYY-MM-DD') : prevToday
            // 初始日期至今日的天数，包括今日
            let days = moment().diff(moment(firstMondayDate), 'days') + 1
            // 每周天数
            let columns = 7
            // 最大列数（周数）
            let lineNums = Math.ceil(days / columns)
            // 绘制图表的源数据
            let dateData = []
            let monthCN = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            let startSliderNum = this.sliderValue[0]
            let endSliderNum = this.sliderValue[1]
            for (let i = 0; i < lineNums; i++) {
                // 最近一星期不一定满的
                let weekColumn = (i === lineNums - 1 ? days % columns ? days % columns : columns : columns)
                // 开始计算title（月份的图例）
                // 思路：第一列直接根据第一天的月份
                //      之后的嘛列数根据上一周的最后一天减去第一天的月份，如果大于1代表月份发生了改变，下一列的title显示最新的月份
                let theWeekStartMonth = moment(firstMondayDate).add(i * 7, 'days').format('M')
                let theWeekEndMonth = moment(firstMondayDate).add(i * 7 + weekColumn, 'days').format('M')
                let title = (i === 0) ? monthCN[theWeekStartMonth - 1] : ''
                let ifSwitchMonth = false
                if (theWeekEndMonth - theWeekStartMonth) {
                    ifSwitchMonth = true
                }
                if (i && dateData[i - 1].ifSwitchMonth) {
                    title = monthCN[theWeekEndMonth - 1]
                }
                // 图表源数据格式：columns：列数，title：列标题，ifSwitchMonth：月份是否发生改变，data：每格数据
                dateData.push({
                    columns: weekColumn,
                    title: title,
                    ifSwitchMonth: ifSwitchMonth,
                    data: []
                })
                for (let j = 0; j < dateData[i].columns; j++) {
                    let date = moment(firstMondayDate).add(i * 7 + j, 'days').format('YYYY-MM-DD')
                    let number = 0
                    // 提交次数在slider范围内再进行次数赋值
                    if ((this.submissionRecord[date] >= startSliderNum && this.submissionRecord[date] < endSliderNum) ||
                        (this.submissionRecord[date] > 12 && endSliderNum === 12)) {
                        number = this.submissionRecord[date]
                    }
                    // number：提交次数，date：提交日期
                    dateData[i].data.push({
                        number: number,
                        date: date
                    })
                }
            }
            this.dateData = dateData
        },
        formatProblemData() {
            let submissionRecord = {}
            let OIProblems = this.profile || {}
            // 格式化profile中oi的提交记录数据，创建submissionRecord对象
            Object.keys(OIProblems).forEach(problemID => {
                if (OIProblems[problemID]['status'] !== 0) {
                    let date = moment(OIProblems[problemID]['date']).format('YYYY-MM-DD')
                    submissionRecord[date.toString()] = OIProblems[problemID]['status']
                }
            })
            // 处理你的业务逻辑
            // submissionRecord 最后的格式应为 {'2020-01-01':10, '2020-01-02': 11}
            this.submissionRecord = submissionRecord
        },
        getColor(number) {
            // level color
            // 左闭右开
            let color = '#EBEDF0'
            if (number >= 9) {
                color = '#196127'
            } else if (number >= 6) {
                color = '#239A3B'
            } else if (number >= 3) {
                color = '#7BC96F'
            } else if (number >= 1) {
                color = '#C6E48B'
            } else {
                color = '#EBEDF0'
            }
            return color
        },
        sliderFormat(val) {
            return '提交次数: ' + val
        },
        sliderChange(val) {
            // 没有使用v-model绑定sliderValue而是采用回调的原因
            // 1.拖拽1px sliderValue都会引起组件重绘，此组件计算嵌套了2个for循环，导致页面出现卡顿slider不流畅的情况
            this.sliderValue = val
            this.init()
        }
    }
}
</script>
<style lang="less" scoped>
.users-header h3 {
    font-size: 2em;
    line-height: 70px;
    text-align: left;
}

.contribution-describtion {
    display: flex;
    column-gap: 50px;
}

.submission-chart {
    width: 820px;
    height: 180px;
    background-color: #fff;
    margin: auto;
    margin-top: 20px;
    padding: 0px 0;
    font-size: 12px;

    .calendar {
        margin-left: 16px;
        margin-right: 16px;
        display: flex;

        .weeks {
            width: 30px;
            margin-right: 3px;
            margin-top: 22px;

            .week {
                margin-top: 13px;
                width: 30px;
                height: 14px;
            }
        }

        .column {
            width: 11px;
            margin-right: 3px;

            .title {
                width: 14px;
                height: 14px;
                margin-bottom: 8px;
                text-align: left;
                overflow: visible;
                white-space: nowrap;
            }

            .date-wrapper {
                width: 11px;
                height: 11px;
                background: #EBEDF0;
                margin-bottom: 3px;

                .date {
                    width: 11px;
                    height: 11px;

                    :hover {
                        width: 13px;
                        height: 13px;
                    }
                }
            }
        }
    }

    .operation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;

        .slider {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;

            .slider-desc {
                width: 11px;
                margin: 0 8px;
            }
        }

        .legend {
            display: flex;
            justify-content: center;
            align-items: center;

            .level-desc {
                margin-right: 6px;
                margin-left: 3px;
            }

            .level {
                margin-right: 3px;
                width: 11px;
                height: 11px;
            }

            .level-1 {
                background: #EBEDF0;
            }

            .level-2 {
                background: #C6E48B;
            }

            .level-3 {
                background: #7BC96F;
            }

            .level-4 {
                background: #239A3B;
            }

            .level-5 {
                background: #196127;
            }
        }
    }
}
</style>