import Favorite from "../models/favoriteModel"

// Get all favorites

export const getAllFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.find({})

    if (!favorite
    ) {
      return res.status(400).json({
        error: `No favorite found`
      })
    }

    res.json(favorite
    )

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Get one school by ID

export const getFavoritelById = async (req, res) => {
  try {
    const { id } = req.params

    const favorite = await Favorite.findById(id)

    if (!favorite) {
      return res.status(400).json({
        error: `favorite not found`
      })
    }

    res.json(favorite)

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Get all favorites by userId

export const getFavoritelByUserId = async (req, res) => {
  try {
    const { userId } = req.user

    const favorites = await Favorite.find({ userId: userId})

    if (!favorites) {
      return res.status(400).json({
        error: `Favorite snot found`
      })
    }

    res.json(favorites)

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Create a Favorite

export const createFavorite = async (req, res) => {
  try {
    const favoriteData = req.body

    if (!favoriteData.length === 0) {
      return res.status(401).json({
        error: `No favorite data found`
      })
    }

    const favoriteCreated = await Favorite.create(favoriteData)

    if (!favoriteCreated) {
      return res.status(400).json({
        error: `Favorite was not able to be created`
      })
    }

    res.json({
      message: `Favorite ${favoriteData.name} was created successfully`
    })

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Update a Favorite by ID

export const updateFavoriteByID = async (req, res) => {
  try {
    const { id } = req.params
    const favoriteData = req.body

    const favoriteToUpdate = await Favorite.findById(id)

    if (!favoriteToUpdate) {
      return res.status(400).json({
        error: `Could not find a School with ID ${id}`
      })
    }

    Object.entries(favoriteData).map((key, value) => {
      favoriteToUpdate[key] = value
    })
    
    await favoriteToUpdate.save()

    res.json({
      message: `School ${favoriteData.name} was updated successfully`
    })

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Delete favorite by ID

export const deleteFavoriteByID = async (req, res) => {
  try {
    const { id } = req.params

    const favoriteToDelete = await Favorite.findByIdAndDelete(id)

    if (!favoriteToDelete) {
      return res.status(400).json({
        error: `Favorite not found and was not deleted`
      })
    }

    res.json({
      message: `Favorite was deleted successfully`
    })

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}