'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    space: { 
      type: DataTypes.STRING,
      required: true
    },
    owner: { 
      type: DataTypes.STRING,
    },
    date: { 
      type: DataTypes.DATE,
      required: true
    },
    time: { 
      type: DataTypes.STRING,
      required: true
    },
    totalGuests: { 
      type: DataTypes.STRING,
      required: true
    },
    cost: { 
      type: DataTypes.FLOAT
    },
    specialRequests: { 
      type: DataTypes.STRING
    },
    inviteList: { 
      type: DataTypes.STRING
    },
    barTab: { 
      type: DataTypes.FLOAT,
      required: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Event;
};