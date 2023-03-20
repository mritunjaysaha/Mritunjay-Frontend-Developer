const fetch = require("node-fetch");

const baseURL = "https://api.spacexdata.com/v3/capsules"

exports.getAllCapsules = async (req, res) => {
    const offset = req.query.offset ? req.query.offset : 0
    const limit = req.query.limit ? req.query.limit : 3

    const result = await fetch(`${baseURL}?offset=${offset}&limit=${limit}`)
    const data = await result.json()

    return res.send(data)
}

exports.getCapsulesByStatus = async (req, res) => {
    const status = req.query.status ? req.query.status : "active"
    const offset = req.query.offset ? req.query.offset : 0
    const limit = req.query.limit ? req.query.limit : 3

    const result = await fetch(`${baseURL}?offset=${offset}&limit=${limit}&status=${status}`)
    const data = await result.json()

    return res.send(data)
}

exports.getCapsulesByOriginalLaunch = async (req, res) => {
    const originalLaunch = req.query.originalLaunch ? req.query.originalLaunch : "2017-02-19T14:39:00.000Z"
    const offset = req.query.offset ? req.query.offset : 0
    const limit = req.query.limit ? req.query.limit : 3

    const result = await fetch(`${baseURL}?offset=${offset}&limit=${limit}&original_launch=${originalLaunch}`)
    const data = await result.json()

    return res.send(data)
}

exports.getCapsulesByType = async (req, res) => {
    const type = req.query.type ? req.query.type : "Dragon 1.1"
    const offset = req.query.offset ? req.query.offset : 0
    const limit = req.query.limit ? req.query.limit : 3

    const result = await fetch(`${baseURL}?offset=${offset}&limit=${limit}&type=${type}`)
    const data = await result.json()

    return res.send(data)
}