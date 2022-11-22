import {random} from "lodash/number";

describe('Generate fake traffic', () => {

    beforeEach(() => {
        cy.clearCookies();
    })

    const sourceMediums = [
        ['', ''],
        ['google', 'cpc'],
        ['google', 'organic'],
        ['facebook.com', 'referral'],
        ['twitter.com', 'referral'],
        ['t.co', 'referral'],
        ['instagram.com', 'referral'],
        ['m.facebook.com', 'referral'],
        ['tiktok.com', 'referral'],
        ['pinterest.com', 'referral'],
        ['youtube.com', 'referral'],
        ['likeshopme', 'dash_hudson']
    ]

    const campaigns = [
        '',
        'Black Friday',
        'Summer Sale',
        'Smmer sale',
        'Influencers refferal',
        'Nov2022_Holiday_V2',
        '123124_id_434_r_13'
    ]


    sourceMediums.forEach(([source, medium]) => {
        const loopCount = random(1, 200)

        for (let i = 1; i < loopCount; i++) {
            it(`fakes ${i} out of ${loopCount} page views with utm_source=${source} and utm_medium=${medium}`, () => {
                cy.visit(`/?utm_source=${source}&utm_medium=${medium}`)
            })
        }

    })
    sourceMediums.forEach(([source, medium]) => {
        const loopCount = random(0, 10)

        for (let i = 1; i < loopCount; i++) {
            it(`fakes ${i} out of ${loopCount} sales with utm_source=${source} and utm_medium=${medium}`, () => {
                cy.visit(`/?utm_source=${source}&utm_medium=${medium}`)
                cy.get('[data-cy="add-to-cart"]').click()
            })
        }

    })
    sourceMediums.forEach(([source, medium]) => {
        campaigns.forEach((campaign) => {
            const loopCount = random(0, 10)

            for (let i = 1; i < loopCount; i++) {
                it(`fakes ${i} out of ${loopCount} page views with utm_source=${source}, utm_medium=${medium}, utm_campaign=${campaign}`, () => {
                    cy.visit(`/?utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`)
                })
                it(`fakes ${i} out of ${loopCount} sales with utm_source=${source}, utm_medium=${medium}, utm_campaign=${campaign}`, () => {
                    cy.visit(`/?utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`)
                    cy.get('[data-cy="add-to-cart"]').click()
                })
            }
        })
    })
})