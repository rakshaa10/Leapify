const prisma = require("../lib/prisma");

const addBookmark = async (req, res) => {
  try {
    const userId = req.user.id;
    const opportunityId = parseInt(req.params.opportunityId);

    // Check if opportunity exists
    const opportunity = await prisma.opportunity.findUnique({
      where: {
        id: opportunityId,
      },
    });

    if (!opportunity) {
      return res.status(404).json({
        message: "Opportunity not found",
      });
    }

    // Check if bookmark already exists
    const existingBookmark = await prisma.bookmark.findUnique({
      where: {
        userId_opportunityId: {
          userId,
          opportunityId,
        },
      },
    });

    if (existingBookmark) {
      return res.status(400).json({
        message: "Opportunity already bookmarked",
      });
    }

    const bookmark = await prisma.bookmark.create({
      data: {
        userId,
        opportunityId,
      },
    });

    res.status(201).json({
      message: "Bookmark added successfully",
      bookmark,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const removeBookmark = async (req, res) => {
  try {
    const userId = req.user.id;
    const opportunityId = parseInt(req.params.opportunityId);

    const bookmark = await prisma.bookmark.findUnique({
      where: {
        userId_opportunityId: {
          userId,
          opportunityId,
        },
      },
    });

    if (!bookmark) {
      return res.status(404).json({
        message: "Bookmark not found",
      });
    }

    await prisma.bookmark.delete({
      where: {
        userId_opportunityId: {
          userId,
          opportunityId,
        },
      },
    });

    res.status(200).json({
      message: "Bookmark removed successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getBookmarks = async (req, res) => {
  try {
    const userId = req.user.id;

    const bookmarks = await prisma.bookmark.findMany({
      where: {
        userId,
      },
      include: {
        opportunity: {
          include: {
            organizer: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json(bookmarks);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  addBookmark,
  removeBookmark,
  getBookmarks,
};
